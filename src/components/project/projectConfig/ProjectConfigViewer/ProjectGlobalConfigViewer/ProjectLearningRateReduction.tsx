import { makeStyles } from '@material-ui/core';
import { ChangeEvent, useCallback, useMemo } from 'react';
import useProjectConfig from '../../../../../hooks/useProjectConfig';
import { ILearningRateReductionConfig, IProjectConfig } from '../../../../../API/project/types';
import NumberInput from '../../../../Input/NumberInput';
import SelectInput from '../../../../Input/SelectInput';
import { getMonitorValues } from '../../../../../core/Project/Montior';
import CheckInput from '../../../../Input/CheckInput';
import FloatInput from '../../../../Input/FloatInput';

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

type Props = {
	learningRateReduction: ILearningRateReductionConfig;
};

const ProjectLearningRateReduction = ({ learningRateReduction }: Props) => {
	const classes = useStyle();
	const { setProjectConfig } = useProjectConfig();

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;

			setProjectConfig((state) => ({
				...(state as IProjectConfig),
				learning_rate_reduction: {
					...(state?.learning_rate_reduction as ILearningRateReductionConfig),
					[name]: value,
				},
			}));
		},
		[setProjectConfig]
	);

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

export default ProjectLearningRateReduction;
