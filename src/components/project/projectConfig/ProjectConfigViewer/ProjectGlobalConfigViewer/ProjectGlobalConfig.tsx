import React, { ChangeEvent, ReactNode } from 'react';
import { ProjectConfig } from '../../../../../API/project/types';
import { CustomInput } from '../../../../Input/custom/CustomInput';
import { CustomNumberInput } from '../../../../Input/custom/CustomNumberInput';
import { CustomDivisionInput } from '../../../../Input/custom/CustomDivisionInput';

export type GlobalConfigProps = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	projectEarlyStopConfigContainer: ReactNode;
	projectLearningRateReductionConfigContainer: ReactNode;
	projectConfig: ProjectConfig;
};

const GlobalConfig = ({
	onChange,
	projectConfig,
	projectEarlyStopConfigContainer,
	projectLearningRateReductionConfigContainer,
}: GlobalConfigProps) => {
	const globalConfig = projectConfig as ProjectConfig;
	return (
		<>
			<CustomNumberInput title="Batch Size" name="batch_size" onChange={onChange} value={globalConfig.batch_size} />
			<CustomNumberInput title="Epochs" name="epochs" onChange={onChange} value={globalConfig.epochs} />
			<CustomInput title="Loss" name="loss" onChange={onChange} value={globalConfig.loss} />
			<CustomDivisionInput title="Metrics" name="metrics" onChange={onChange} value={globalConfig.metrics} />
			{projectEarlyStopConfigContainer}
			{projectLearningRateReductionConfigContainer}
		</>
	);
};

export default GlobalConfig;
