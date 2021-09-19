import { ChangeEvent, useCallback, useMemo } from 'react';
import { IProjectConfig, IProjectOptimizerConfig } from '../../../../../API/project/types';
import { getOptimizerValues } from '../../../../../core/Project/Optimizers';
import { CustomInput } from '../../../../Input/custom/CustomInput';
import { CustomSelectInput } from '../../../../Input/custom/CustomSelectInput';

export type OptimizerConfigProps = {
	projectConfig: IProjectConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const OptimizerConfig = ({ projectConfig, onChange }: OptimizerConfigProps) => {
	const optimizerValues = useMemo(() => getOptimizerValues(), []);

	return (
		<>
			<CustomSelectInput
				onChange={onChange}
				name="optimizer"
				propertyCandidates={optimizerValues}
				value={projectConfig.optimizer}
				title="Optimizer"
			/>
			<CustomInput onChange={onChange} name="loss" value={projectConfig.loss} title="Loss" />
			<CustomInput onChange={onChange} name="metrics" value={projectConfig.metrics.toString()} title="Metrics" />
			<CustomInput onChange={onChange} name="learning_rate" value={projectConfig.learning_rate} title="Learning Rate" />
		</>
	);
};

export default OptimizerConfig;
