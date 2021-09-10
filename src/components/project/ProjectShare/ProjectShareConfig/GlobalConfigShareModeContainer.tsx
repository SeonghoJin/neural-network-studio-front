import { ChangeEvent, useCallback } from 'react';
import ProjectEarlyStopConfigContainer from '../../projectConfig/ProjectConfigViewer/ProjectGlobalConfigViewer/ProjectEarlyStopConfig/ProjectEarlyStopConfigContainer';
import GlobalConfig, {
	GlobalConfigProps,
} from '../../projectConfig/ProjectConfigViewer/ProjectGlobalConfigViewer/ProjectGlobalConfig';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import ProjectLearningRateReductionConfigContainer from '../../projectConfig/ProjectConfigViewer/ProjectGlobalConfigViewer/ProjectLearningRateReductionConfig/ProjectLearningRateReductionConfigContainer';
import { IProjectConfig, IProjectGlobalConfig } from '../../../../API/project/types';
import { useSocket } from '../../../../core/Socket/hooks/useSocket';
import { ProjectConfigChangeDto } from '../../../../core/Socket/dto/project.config.change.dto';
import ProjectEarlyStopConfigShareModeContainer from './EarlyStopConfigShareModeContainer';
import ProjectLearningRateReductionConfigShareModeContainer from './LearningRateReductionConfigShareModeContainer';

const GlobalConfigShareModeContainer = ({ projectConfig }: Omit<GlobalConfigProps, 'onChange'>) => {
	const globalConfig = projectConfig as IProjectGlobalConfig;
	const { setProjectConfig } = useProjectConfig();
	const { socketService } = useSocket();
	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			const dto = new ProjectConfigChangeDto();
			dto.name = name;
			dto.value = value;
			socketService?.changeProjectConfig(dto);
			setProjectConfig({
				...(projectConfig as IProjectConfig),
				[name]: value,
			});
		},
		[projectConfig, setProjectConfig, socketService]
	);

	return (
		<GlobalConfig
			onChange={onChange}
			projectLearningRateReductionConfigContainer={
				<ProjectLearningRateReductionConfigShareModeContainer
					learningRateReduction={projectConfig.learning_rate_reduction}
				/>
			}
			projectConfig={globalConfig}
			projectEarlyStopConfigContainer={
				<ProjectEarlyStopConfigShareModeContainer earlyStopConfig={projectConfig.early_stop} />
			}
		/>
	);
};

export default GlobalConfigShareModeContainer;
