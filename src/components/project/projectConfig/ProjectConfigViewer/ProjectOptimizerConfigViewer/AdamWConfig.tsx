import { ChangeEvent } from 'react';
import { OptimizerConfig } from '../../../../../API/project/types';
import { CustomInput } from '../../../../Input/custom/CustomInput';
import { CustomCheckInput } from '../../../../Input/custom/CustomCheckInput';

type Props = {
	optimizerConfig: Pick<
		OptimizerConfig,
		'learning_rate' | 'beta_1' | 'beta_2' | 'epsilon' | 'amsgrad' | 'weight_decay'
	>;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const AdamWConfig = ({ optimizerConfig, onChange }: Props) => {
	return (
		<>
			<CustomInput
				title="learning_rate"
				name="learning_rate"
				onChange={onChange}
				value={optimizerConfig.learning_rate}
			/>
			<CustomInput title="beta_1" name="beta_1" onChange={onChange} value={optimizerConfig.beta_1} />
			<CustomInput title="beta_2" name="beta_2" onChange={onChange} value={optimizerConfig.beta_2} />
			<CustomInput title="epsilon" name="epsilon" onChange={onChange} value={optimizerConfig.epsilon} />
			<CustomCheckInput title="amsgrad" name="amsgrad" onChange={onChange} value={optimizerConfig.amsgrad} />
			<CustomInput title="weight_decay" name="weight_decay" onChange={onChange} value={optimizerConfig.weight_decay} />
		</>
	);
};
