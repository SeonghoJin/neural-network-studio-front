import { makeStyles } from '@material-ui/core';
import { ChangeEvent, useMemo } from 'react';
import { IEarlyStopConfig } from '../../../../../../API/project/types';
import NumberInput from '../../../../../Input/NumberInput';
import SelectInput from '../../../../../Input/SelectInput';
import { getMonitorValues } from '../../../../../../core/Project/Montior';
import CheckInput from '../../../../../Input/CheckInput';
import { CustomCheckInput } from '../../../../../Input/custom/CustomCheckInput';
import { CustomSelectInput } from '../../../../../Input/custom/CustomSelectInput';
import { CustomInput } from '../../../../../Input/custom/CustomInput';

export type EarlyStopConfigProps = {
	earlyStopConfig: IEarlyStopConfig;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ProjectEarlyStopConfig = ({ earlyStopConfig, onChange }: EarlyStopConfigProps) => {
	const monitorValues = useMemo(() => getMonitorValues(), []);

	return (
		<>
			<CustomCheckInput
				onChange={onChange}
				name="usage"
				value={earlyStopConfig.usage}
				title="Early Stop Config Check"
			/>
			{earlyStopConfig.usage && (
				<>
					<CustomSelectInput
						name="monitor"
						value={earlyStopConfig.monitor}
						propertyCandidates={monitorValues}
						onChange={onChange}
						title="Monitor"
					/>
					<CustomInput name="patience" value={earlyStopConfig.patience} onChange={onChange} title="Patience" />
				</>
			)}
		</>
	);
};

export default ProjectEarlyStopConfig;
