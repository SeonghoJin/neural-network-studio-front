import { ChangeEvent, createElement, FC, useMemo } from 'react';
import { ProjectConfig } from '../../../../../API/project/types';
import Optimizers, { getOptimizerValues } from '../../../../../core/Project/Optimizers';
import { CustomCheckInput } from '../../../../Input/custom/CustomCheckInput';
import { CustomInput } from '../../../../Input/custom/CustomInput';
import { CustomSelectInput } from '../../../../Input/custom/CustomSelectInput';
import { AdadeltaConfig } from './AdadeltaConfig';
import { AdagradConfig } from './AdagradConfig';
import { AdamConfig } from './AdamConfig';
import { AdamaxConfig } from './AdamaxConfig';
import { NadamConfig } from './NadamConfig';
import { RMSPropConfig } from './RMSPropConfig';
import { SGDConfig } from './SGDConfig';
import { AdamWConfig } from './AdamWConfig';
import { SGDWConfig } from './SGDWConfig';

export type OptimizerConfigProps = {
	projectConfig: ProjectConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onOptimizerConfigChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type OptimizerConfigInputKey = keyof typeof Optimizers;
type OptimizerConfigInputMapperType = {
	[K in OptimizerConfigInputKey]: FC<any>;
};

const OptimizerConfigInputMapper: OptimizerConfigInputMapperType = {
	Adadelta: AdadeltaConfig,
	Adagrad: AdagradConfig,
	Adam: AdamConfig,
	Adamax: AdamaxConfig,
	Nadam: NadamConfig,
	RMSprop: RMSPropConfig,
	SGD: SGDConfig,
	AdamW: AdamWConfig,
	SGDW: SGDWConfig,
};

const OptimizerConfigComponent = ({ projectConfig, onChange, onOptimizerConfigChange }: OptimizerConfigProps) => {
	const optimizerValues = useMemo(() => getOptimizerValues(), []);
	const optimizerConfig = projectConfig.optimizer_config;
	const element = createElement(OptimizerConfigInputMapper[projectConfig.optimizer_name], {
		optimizerConfig,
		onChange: onOptimizerConfigChange,
	});
	return (
		<>
			<CustomSelectInput
				onChange={onChange}
				name="optimizer_name"
				propertyCandidates={optimizerValues}
				value={projectConfig.optimizer_name}
				title="Optimizer Name"
			/>
			{element}
		</>
	);
};

export default OptimizerConfigComponent;
