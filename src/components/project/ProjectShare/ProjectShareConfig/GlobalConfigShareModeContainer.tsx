import { ChangeEvent, useCallback } from 'react';
import ProjectEarlyStopConfigContainer from '../../projectConfig/ProjectConfigViewer/ProjectGlobalConfigViewer/ProjectEarlyStopConfig/ProjectEarlyStopConfigContainer';
import GlobalConfig, {
	GlobalConfigProps,
} from '../../projectConfig/ProjectConfigViewer/ProjectGlobalConfigViewer/ProjectGlobalConfig';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import ProjectLearningRateReductionConfigContainer from '../../projectConfig/ProjectConfigViewer/ProjectGlobalConfigViewer/ProjectLearningRateReductionConfig/ProjectLearningRateReductionConfigContainer';
import { IProjectConfig, IProjectGlobalConfig } from '../../../../API/project/types';

const GlobalConfigShareModeContainer = ({ projectConfig }: Omit<GlobalConfigProps, 'onChange'>) => {
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

export default GlobalConfigShareModeContainer;
