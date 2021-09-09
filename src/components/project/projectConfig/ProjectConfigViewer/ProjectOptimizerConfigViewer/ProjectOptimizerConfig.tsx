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

export type OptimizerConfigProps = {
	projectConfig: IProjectConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const OptimizerConfig = ({ projectConfig, onChange }: OptimizerConfigProps) => {
	const classes = useStyle();

	const optimizerValues = useMemo(() => getOptimizerValues(), []);

	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<SelectInput
					onChange={onChange}
					propertyName="optimizer"
					propertyCandidates={optimizerValues}
					propertyContent={projectConfig.optimizer}
				/>
				<TextInput onChange={onChange} propertyName="loss" propertyContent={projectConfig.loss} />
				<TextInput onChange={onChange} propertyName="metrics" propertyContent={projectConfig.metrics} />
				<FloatInput onChange={onChange} propertyName="learning_rate" propertyContent={projectConfig.learning_rate} />
			</div>
		</div>
	);
};

export default OptimizerConfig;
