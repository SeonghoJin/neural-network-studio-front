import { makeStyles } from '@material-ui/core';
import { ChangeEvent, useCallback, useMemo } from 'react';
import useProjectConfig from '../../../../../hooks/useProjectConfig';
import { CircleLoading } from '../../../../utils/Loading/CircularLoading';
import { IEarlyStopConfig, IProjectConfig, IProjectGlobalConfig } from '../../../../../API/project/types';
import NumberInput from '../../../../Input/NumberInput';
import SelectInput from '../../../../Input/SelectInput';
import { getMonitorValues } from '../../../../../core/Project/Montior';
import CheckInput from '../../../../Input/CheckInput';

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
	earlyStopConfig: IEarlyStopConfig;
};

const ProjectEarlyStopConfig = ({ earlyStopConfig }: Props) => {
	const classes = useStyle();
	const { setProjectConfig } = useProjectConfig();
	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;

			setProjectConfig((state) => ({
				...(state as IProjectConfig),
				early_stop: {
					...(state?.early_stop as IEarlyStopConfig),
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
					<NumberInput propertyName="patience" propertyContent={earlyStopConfig.patience || ''} onChange={onChange} />
				</>
			)}
		</div>
	);
};

export default ProjectEarlyStopConfig;
