import { ChangeEvent, useMemo } from 'react';
import { LearningRateReductionConfig } from '../../../../../../API/project/types';
import { getMonitorValues } from '../../../../../../core/Project/Montior';
import { CustomCheckInput } from '../../../../../Input/custom/CustomCheckInput';
import { CustomInput } from '../../../../../Input/custom/CustomInput';
import { CustomSelectInput } from '../../../../../Input/custom/CustomSelectInput';
import { CustomNumberInput } from '../../../../../Input/custom/CustomNumberInput';

export type ProjectLearningRateReductionConfigProps = {
	learningRateReduction: LearningRateReductionConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ProjectLearningRateReductionConfig = ({
	learningRateReduction,
	onChange,
}: ProjectLearningRateReductionConfigProps) => {
	const monitorValues = useMemo(() => getMonitorValues(), []);

	return (
		<>
			<CustomCheckInput
				onChange={onChange}
				name="usage"
				value={learningRateReduction.usage}
				title="Learning Rate Reduction Check"
			/>
			{learningRateReduction.usage && (
				<>
					<CustomSelectInput
						name="monitor"
						value={learningRateReduction.monitor}
						propertyCandidates={monitorValues}
						onChange={onChange}
						title="Monitor"
					/>
					<CustomNumberInput
						title="Patience"
						name="patience"
						value={learningRateReduction.patience}
						onChange={onChange}
					/>
					<CustomNumberInput title="Factor" name="factor" value={learningRateReduction.factor} onChange={onChange} />
					<CustomNumberInput title="Min_lr" name="min_lr" value={learningRateReduction.min_lr} onChange={onChange} />
				</>
			)}
		</>
	);
};

export default ProjectLearningRateReductionConfig;
