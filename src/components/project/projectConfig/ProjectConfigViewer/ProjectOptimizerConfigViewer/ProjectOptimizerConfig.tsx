import { ChangeEvent, FC, useMemo } from 'react';
import { ProjectConfig } from '../../../../../API/project/types';
import Optimizers, { getOptimizerValues } from '../../../../../core/Project/Optimizers';
import { CustomInput } from '../../../../Input/custom/CustomInput';
import { CustomSelectInput } from '../../../../Input/custom/CustomSelectInput';

export type OptimizerConfigProps = {
	projectConfig: ProjectConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type OptimizerConfigInputKey = keyof typeof Optimizers;
type OptimizerConfigInputMapperType = {
	[K in OptimizerConfigInputKey]: FC<any>;
};

// const OptimizerConfigInputMapper: OptimizerConfigInputMapperType = {
// 	AdaDelta: <></>,
// 	Adagrad: <></>,
// 	Adam: undefined,
// 	GD: undefined,
// 	Momentum: undefined,
// 	NAG: undefined,
// 	Nadam: undefined,
// 	RMSProp: undefined,
// 	SGD: undefined
// };

const OptimizerConfigComponent = ({ projectConfig, onChange }: OptimizerConfigProps) => {
	const optimizerValues = useMemo(() => getOptimizerValues(), []);

	return (
		<>
			<CustomSelectInput
				onChange={onChange}
				name="optimizer_name"
				propertyCandidates={optimizerValues}
				value={projectConfig.optimizer_name}
				title="Optimizer Name"
			/>
			<CustomInput onChange={onChange} name="loss" value={projectConfig.loss} title="Loss" />
			<CustomInput onChange={onChange} name="metrics" value={projectConfig.metrics.toString()} title="Metrics" />
		</>
	);
};

export default OptimizerConfigComponent;
