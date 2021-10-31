import { ChangeEvent, useCallback } from 'react';
import useProjectConfig from '../../../../../hooks/useProjectConfig';
import { ProjectConfig } from '../../../../../API/project/types';
import ProjectLearningRateReductionConfigContainer from './ProjectLearningRateReductionConfig/ProjectLearningRateReductionConfigContainer';
import ProjectEarlyStopConfigContainer from './ProjectEarlyStopConfig/ProjectEarlyStopConfigContainer';
import GlobalConfig, { GlobalConfigProps } from './ProjectGlobalConfig';
import { useDatasetConfigList } from '../../../../../hooks/useGetDatasetConfigList';
import SimpleBackdrop from '../../../../utils/BackLoading';

const GlobalConfigContainer = ({ projectConfig }: Omit<GlobalConfigProps, 'onChange'>) => {
	const globalConfig = projectConfig as ProjectConfig;
	const { setProjectConfig } = useProjectConfig();
	const { datasetConfigList, loading } = useDatasetConfigList();
	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setProjectConfig({
				...(projectConfig as ProjectConfig),
				[name]: value,
			});
		},
		[projectConfig, setProjectConfig]
	);
	const onDatasetChange = useCallback(
		(name, value) => {
			setProjectConfig({
				...(projectConfig as ProjectConfig),
				dataset_config: {
					valid: value !== '-1',
					id: value,
				},
			});
		},
		[projectConfig, setProjectConfig]
	);

	return (
		<>
			{loading && <SimpleBackdrop open />}
			{datasetConfigList && (
				<GlobalConfig
					onChange={onChange}
					projectLearningRateReductionConfigContainer={
						<ProjectLearningRateReductionConfigContainer
							learningRateReduction={projectConfig.learning_rate_reduction}
						/>
					}
					datasetConfigList={datasetConfigList}
					projectConfig={globalConfig}
					onDatasetChange={onDatasetChange}
					projectEarlyStopConfigContainer={
						<ProjectEarlyStopConfigContainer earlyStopConfig={projectConfig.early_stop} />
					}
				/>
			)}
		</>
	);
};

export default GlobalConfigContainer;
