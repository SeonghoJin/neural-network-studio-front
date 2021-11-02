import React, { ChangeEvent, ReactNode, useMemo } from 'react';
import { ProjectConfig } from '../../../../../API/project/types';
import { CustomInput } from '../../../../Input/custom/CustomInput';
import { CustomNumberInput } from '../../../../Input/custom/CustomNumberInput';
import { CustomDivisionInput } from '../../../../Input/custom/CustomDivisionInput';
import { useDatasetConfigList } from '../../../../../hooks/useGetDatasetConfigList';
import { CustomDatasetSelectInput } from '../../../../Input/custom/CustomDatasetSelectInput';
import { DatasetConfig } from '../../../projectDataset/types';
import { CustomNameValueSelectInput } from '../../../../Input/custom/CustomNaveValueSelectInput';
import { CustomSelectInput } from '../../../../Input/custom/CustomSelectInput';

export type GlobalConfigProps = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	projectEarlyStopConfigContainer: ReactNode;
	projectLearningRateReductionConfigContainer: ReactNode;
	projectConfig: ProjectConfig;
	datasetConfigList: DatasetConfig[];
	onDatasetChange: (name: string, value: string) => void;
};

const GlobalConfig = ({
	onChange,
	projectConfig,
	projectEarlyStopConfigContainer,
	projectLearningRateReductionConfigContainer,
	datasetConfigList,
	onDatasetChange,
}: GlobalConfigProps) => {
	const globalConfig = projectConfig as ProjectConfig;
	const dataConfigCandidates = useMemo(() => {
		return datasetConfigList.map((datasetConfig) => {
			return {
				name: datasetConfig.name,
				id: datasetConfig.id.toString(),
			};
		});
	}, [datasetConfigList]);
	const dataConfigName = useMemo(() => {
		return (
			datasetConfigList.find((datasetConfig) => {
				return datasetConfig.id.toString() === globalConfig.dataset_config.id;
			})?.name || 'none'
		);
	}, [datasetConfigList, globalConfig.dataset_config.id]);

	const lossCandidates = useMemo(() => {
		return ['binary_crossentropy', 'categorical_crossentropy', 'mse', 'mae'];
	}, []);

	return (
		<>
			<CustomNumberInput title="Batch Size" name="batch_size" onChange={onChange} value={globalConfig.batch_size} />
			<CustomNumberInput title="Epochs" name="epochs" onChange={onChange} value={globalConfig.epochs} />
			<CustomSelectInput
				title="Loss"
				name="loss"
				onChange={onChange}
				value={globalConfig.loss}
				propertyCandidates={lossCandidates}
			/>
			<CustomDivisionInput title="Metrics" name="metrics" onChange={onChange} value={globalConfig.metrics} />
			<CustomNameValueSelectInput
				title="데이터셋 설정"
				name="id"
				onChange={(e) => {
					const { name, value } = e.target;
					onDatasetChange(name, value);
				}}
				value={{
					id: globalConfig.dataset_config.id || '-1',
					name: dataConfigName,
				}}
				propertyCandidates={dataConfigCandidates}
			/>
			{projectEarlyStopConfigContainer}
			{projectLearningRateReductionConfigContainer}
		</>
	);
};

export default GlobalConfig;
