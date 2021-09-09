import { makeStyles } from '@material-ui/core';
import { ChangeEvent, useCallback, useMemo } from 'react';
import useProjectConfig from '../../../../../hooks/useProjectConfig';
import CircleLoading from '../../../../utils/Loading/CircularLoading';
import { IProjectConfig, IProjectOptimizerConfig } from '../../../../../API/project/types';
import TextInput from '../../../../Input/TextInput';
import SelectInput from '../../../../Input/SelectInput';
import { getOptimizerValues } from '../../../../../core/Project/Optimizers';
import FloatInput from '../../../../Input/FloatInput';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
	container: {
		width: '100%',
		height: '100%',
		padding: '10px',
	},
});

const OptimizerConfig = () => {
	const { projectConfig, setProjectConfig } = useProjectConfig();
	const classes = useStyle();
	const optimizerConfig = projectConfig as IProjectOptimizerConfig;
	const { loading, error } = useProjectConfig();
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

	const optimizerValues = useMemo(() => getOptimizerValues(), []);

	const content = projectConfig && (
		<>
			<SelectInput
				onChange={onChange}
				propertyName="optimizer"
				propertyCandidates={optimizerValues}
				propertyContent={optimizerConfig.optimizer}
			/>
			<TextInput onChange={onChange} propertyName="loss" propertyContent={optimizerConfig.loss} />
			<TextInput onChange={onChange} propertyName="metrics" propertyContent={optimizerConfig?.metrics} />
			<FloatInput onChange={onChange} propertyName="learning_rate" propertyContent={optimizerConfig.learning_rate} />
		</>
	);

	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>{error || loading ? <CircleLoading /> : content}</div>
		</div>
	);
};

export default OptimizerConfig;
