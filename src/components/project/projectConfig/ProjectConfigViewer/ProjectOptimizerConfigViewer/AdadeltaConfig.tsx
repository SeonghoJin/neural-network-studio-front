import { ChangeEvent } from 'react';
import { OptimizerConfig } from '../../../../../API/project/types';
import { CustomInput } from '../../../../Input/custom/CustomInput';

type Props = {
	optimizerConfig: Pick<OptimizerConfig, 'learning_rate' | 'weight_decay' | 'epsilon'>;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const AdadeltaConfig = ({ optimizerConfig, onChange }: Props) => {
	return (
		<>
			<CustomInput
				title="learning_rate"
				name="learning_rate"
				onChange={onChange}
				value={optimizerConfig.learning_rate}
			/>
			<CustomInput title="weight_decay" name="weight_decay" onChange={onChange} value={optimizerConfig.weight_decay} />
			<CustomInput title="epsilon" name="epsilon" onChange={onChange} value={optimizerConfig.epsilon} />
		</>
	);
};
