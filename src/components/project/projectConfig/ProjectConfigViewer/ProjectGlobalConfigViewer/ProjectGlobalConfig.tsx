import React, { ChangeEvent, ReactNode } from 'react';
import { ProjectConfig } from '../../../../../API/project/types';
import { CustomInput } from '../../../../Input/custom/CustomInput';

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
			<CustomInput title="Batch Size" name="batch_size" onChange={onChange} value={globalConfig.batch_size} />
			<CustomInput title="Epochs" name="epochs" onChange={onChange} value={globalConfig.epochs} />
			{projectEarlyStopConfigContainer}
			{projectLearningRateReductionConfigContainer}
		</>
	);
};

export default GlobalConfig;
