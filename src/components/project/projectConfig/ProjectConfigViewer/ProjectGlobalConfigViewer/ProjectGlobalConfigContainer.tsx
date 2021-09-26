import { ChangeEvent, useCallback } from 'react';
import useProjectConfig from '../../../../../hooks/useProjectConfig';
import { IProjectConfig, IProjectGlobalConfig } from '../../../../../API/project/types';
import ProjectLearningRateReductionConfigContainer from './ProjectLearningRateReductionConfig/ProjectLearningRateReductionConfigContainer';
import ProjectEarlyStopConfigContainer from './ProjectEarlyStopConfig/ProjectEarlyStopConfigContainer';
import GlobalConfig, { GlobalConfigProps } from './ProjectGlobalConfig';

const GlobalConfigContainer = ({ projectConfig }: Omit<GlobalConfigProps, 'onChange'>) => {
	const globalConfig = projectConfig as IProjectGlobalConfig;
	const { setProjectConfig } = useProjectConfig();
	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setProjectConfig({
				...(projectConfig as IProjectConfig),
				[name]: value,
			});
		},
		[projectConfig, setProjectConfig]
	);

	return (
		<GlobalConfig
			onChange={onChange}
			projectLearningRateReductionConfigContainer={
				<ProjectLearningRateReductionConfigContainer learningRateReduction={projectConfig.learning_rate_reduction} />
			}
			projectConfig={globalConfig}
			projectEarlyStopConfigContainer={<ProjectEarlyStopConfigContainer earlyStopConfig={projectConfig.early_stop} />}
		/>
	);
};

export default GlobalConfigContainer;
