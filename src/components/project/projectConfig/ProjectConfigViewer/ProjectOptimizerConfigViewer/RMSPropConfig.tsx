import { ChangeEvent } from 'react';
import { OptimizerConfig } from '../../../../../API/project/types';
import { CustomInput } from '../../../../Input/custom/CustomInput';
import { CustomCheckInput } from '../../../../Input/custom/CustomCheckInput';

type Props = {
	optimizerConfig: Pick<OptimizerConfig, 'learning_rate' | 'decay' | 'momentum' | 'epsilon' | 'centered'>;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const RMSPropConfig = ({ optimizerConfig, onChange }: Props) => {
	return (
		<>
			<CustomInput
				title="learning_rate"
				name="learning_rate"
				onChange={onChange}
				value={optimizerConfig.learning_rate}
			/>
			<CustomInput title="decay" name="decay" onChange={onChange} value={optimizerConfig.decay} />
			<CustomInput title="momentum" name="momentum" onChange={onChange} value={optimizerConfig.momentum} />
			<CustomInput title="epsilon" name="epsilon" onChange={onChange} value={optimizerConfig.epsilon} />
			<CustomCheckInput title="centered" name="centered" onChange={onChange} value={optimizerConfig.centered} />
		</>
	);
};
