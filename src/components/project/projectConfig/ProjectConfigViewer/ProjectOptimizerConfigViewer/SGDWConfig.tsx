import { ChangeEvent } from 'react';
import { OptimizerConfig } from '../../../../../API/project/types';
import { CustomInput } from '../../../../Input/custom/CustomInput';
import { CustomCheckInput } from '../../../../Input/custom/CustomCheckInput';

type Props = {
	optimizerConfig: Pick<OptimizerConfig, 'learning_rate' | 'momentum' | 'nesterov' | 'weight_decay'>;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SGDWConfig = ({ optimizerConfig, onChange }: Props) => {
	return (
		<>
			<CustomInput title="weight_decay" name="weight_decay" onChange={onChange} value={optimizerConfig.weight_decay} />
			<CustomInput
				title="learning_rate"
				name="learning_rate"
				onChange={onChange}
				value={optimizerConfig.learning_rate}
			/>
			<CustomInput title="momentum" name="momentum" onChange={onChange} value={optimizerConfig.momentum} />
			<CustomCheckInput title="nesterov" name="nesterov" onChange={onChange} value={optimizerConfig.nesterov} />
		</>
	);
};
