import { makeStyles } from '@material-ui/core';
import { ChangeEvent, useMemo } from 'react';
import { IEarlyStopConfig } from '../../../../../../API/project/types';
import NumberInput from '../../../../../Input/NumberInput';
import SelectInput from '../../../../../Input/SelectInput';
import { getMonitorValues } from '../../../../../../core/Project/Montior';
import CheckInput from '../../../../../Input/CheckInput';

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

export type EarlyStopConfigProps = {
	earlyStopConfig: IEarlyStopConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ProjectEarlyStopConfig = ({ earlyStopConfig, onChange }: EarlyStopConfigProps) => {
	const classes = useStyle();

	const monitorValues = useMemo(() => getMonitorValues(), []);

	return (
		<div className={classes.container}>
			<div className={classes.earlyStopUsageCheckInputWrapper}>
				Early Stop Config Usage
				<CheckInput onChange={onChange} propertyName="usage" propertyContent={earlyStopConfig.usage} />
			</div>
			{earlyStopConfig.usage && (
				<>
					<SelectInput
						propertyName="monitor"
						propertyContent={earlyStopConfig.monitor}
						propertyCandidates={monitorValues}
						onChange={onChange}
					/>
					<NumberInput propertyName="patience" propertyContent={earlyStopConfig.patience} onChange={onChange} />
				</>
			)}
		</div>
	);
};

export default ProjectEarlyStopConfig;
