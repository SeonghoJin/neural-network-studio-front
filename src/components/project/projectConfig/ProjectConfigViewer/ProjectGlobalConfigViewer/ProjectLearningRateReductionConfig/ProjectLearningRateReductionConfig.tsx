import { makeStyles } from '@material-ui/core';
import { ChangeEvent, useMemo } from 'react';
import { ILearningRateReductionConfig } from '../../../../../../API/project/types';
import NumberInput from '../../../../../Input/NumberInput';
import SelectInput from '../../../../../Input/SelectInput';
import { getMonitorValues } from '../../../../../../core/Project/Montior';
import CheckInput from '../../../../../Input/CheckInput';
import FloatInput from '../../../../../Input/FloatInput';

const useStyle = makeStyles({
	container: {
		width: '100%',
		height: '100%',
		padding: 10,
	},
	earlyStopUsageCheckInputWrapper: {
		display: 'flex',
		flexDirection: 'column',
	},
});

export type ProjectLearningRateReductionConfigProps = {
	learningRateReduction: ILearningRateReductionConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ProjectLearningRateReductionConfig = ({
	learningRateReduction,
	onChange,
}: ProjectLearningRateReductionConfigProps) => {
	const classes = useStyle();

	const monitorValues = useMemo(() => getMonitorValues(), []);

	return (
		<div className={classes.container}>
			<div className={classes.earlyStopUsageCheckInputWrapper}>
				Learning Rate Reduction Usage
				<CheckInput onChange={onChange} propertyName="usage" propertyContent={learningRateReduction.usage} />
			</div>
			{learningRateReduction.usage && (
				<>
					<SelectInput
						propertyName="monitor"
						propertyContent={learningRateReduction.monitor}
						propertyCandidates={monitorValues}
						onChange={onChange}
					/>
					<NumberInput propertyName="patience" propertyContent={learningRateReduction.patience} onChange={onChange} />
					<FloatInput propertyName="factor" propertyContent={learningRateReduction.factor} onChange={onChange} />
					<FloatInput propertyName="min_lr" propertyContent={learningRateReduction.min_lr} onChange={onChange} />
				</>
			)}
		</div>
	);
};

export default ProjectLearningRateReductionConfig;
