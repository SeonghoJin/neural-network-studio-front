import { makeStyles } from '@material-ui/core';
import { ChangeEvent, useCallback } from 'react';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import CircleLoading from '../../../Loading/CircularLoading';
import { IProjectGlobalConfig } from '../../../../API/project/types';
import NumberInput from '../../../Input/NumberInput';
import useGetProjectConfigResult from '../../../../hooks/APIResult/useGetProjectConfigResult';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
	container: {
		width: '100%',
		height: '100%',
		padding: 10,
	},
});

const GlobalConfig = () => {
	const classes = useStyle();
	const [projectConfig, setProjectConfig] = useProjectConfig();
	const { loading, error, data } = useGetProjectConfigResult();
	const globalConfig = projectConfig as IProjectGlobalConfig;

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setProjectConfig({
				...projectConfig,
				[name]: value,
			});
		},
		[projectConfig, setProjectConfig]
	);

	const content = data && (
		<>
			<NumberInput onChange={onChange} propertyName="batch_size" propertyContent={globalConfig.batch_size || 0} />
			<NumberInput onChange={onChange} propertyName="epochs" propertyContent={globalConfig.epochs || 0} />
		</>
	);

	return (
		<div>
			<div className={classes.wrapper}>
				<div className={classes.container}>{loading || error ? <CircleLoading /> : content}</div>
			</div>
		</div>
	);
};

export default GlobalConfig;
