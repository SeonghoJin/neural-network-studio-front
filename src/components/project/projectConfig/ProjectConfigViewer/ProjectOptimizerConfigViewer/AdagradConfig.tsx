import { ChangeEvent } from 'react';
import { OptimizerConfig } from '../../../../../API/project/types';
import { CustomInput } from '../../../../Input/custom/CustomInput';

type Props = {
	optimizerConfig: Pick<OptimizerConfig, 'learning_rate' | 'initial_accumulator_value' | 'epsilon'>;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const AdagradConfig = ({ optimizerConfig, onChange }: Props) => {
	return (
		<>
			<CustomInput
				title="learning_rate"
				name="learning_rate"
				onChange={onChange}
				value={optimizerConfig.learning_rate}
			/>
			<CustomInput
				title="initial_accumulator_value"
				name="initial_accumulator_value"
				onChange={onChange}
				value={optimizerConfig.initial_accumulator_value}
			/>
			<CustomInput title="epsilon" name="epsilon" onChange={onChange} value={optimizerConfig.epsilon} />
		</>
	);
};
