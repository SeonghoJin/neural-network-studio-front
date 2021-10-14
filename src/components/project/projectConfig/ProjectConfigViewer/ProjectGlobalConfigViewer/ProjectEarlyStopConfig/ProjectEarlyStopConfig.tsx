import { ChangeEvent, useMemo } from 'react';
import { EarlyStopConfig } from '../../../../../../API/project/types';
import { getMonitorValues } from '../../../../../../core/Project/Montior';
import { CustomCheckInput } from '../../../../../Input/custom/CustomCheckInput';
import { CustomSelectInput } from '../../../../../Input/custom/CustomSelectInput';
import { CustomInput } from '../../../../../Input/custom/CustomInput';
import { CustomNumberInput } from '../../../../../Input/custom/CustomNumberInput';

export type EarlyStopConfigProps = {
	earlyStopConfig: EarlyStopConfig;
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
					<CustomNumberInput name="patience" value={earlyStopConfig.patience} onChange={onChange} title="Patience" />
				</>
			)}
		</>
	);
};

export default ProjectEarlyStopConfig;
