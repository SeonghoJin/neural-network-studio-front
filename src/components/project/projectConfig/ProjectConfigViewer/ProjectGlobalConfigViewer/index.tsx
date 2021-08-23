import { makeStyles } from '@material-ui/core';
import { ChangeEvent, useCallback } from 'react';
import useProjectConfig from '../../../../../hooks/useProjectConfig';
import { CircleLoading } from '../../../../utils/Loading/CircularLoading';
import { IProjectConfig, IProjectGlobalConfig } from '../../../../../API/project/types';
import NumberInput from '../../../../Input/NumberInput';
import ProjectEarlyStopConfig from './ProjectEarlyStopConfig';
import ProjectLearningRateReduction from './ProjectLearningRateReduction';

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
	const { projectConfig, setProjectConfig, loading } = useProjectConfig();
	const globalConfig = projectConfig as IProjectGlobalConfig;

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setProjectConfig({
				...(projectConfig as IProjectConfig),
				[name]: value,
			});
		},
		[projectConfig, setProjectConfig]
	);

	const content = projectConfig && (
		<>
			<NumberInput onChange={onChange} propertyName="batch_size" propertyContent={globalConfig.batch_size || ''} />
			<NumberInput onChange={onChange} propertyName="epochs" propertyContent={globalConfig.epochs || ''} />
			<ProjectEarlyStopConfig earlyStopConfig={projectConfig.early_stop} />
			<ProjectLearningRateReduction learningRateReduction={projectConfig.learning_rate_reduction} />
		</>
	);

	return (
		<div>
			<div className={classes.wrapper}>
				<div className={classes.container}>{loading ? <CircleLoading /> : content}</div>
			</div>
		</div>
	);
};

export default GlobalConfig;
