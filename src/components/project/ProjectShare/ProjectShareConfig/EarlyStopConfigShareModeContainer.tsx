import { ChangeEvent, useCallback } from 'react';
import ProjectEarlyStopConfig, {
	EarlyStopConfigProps,
} from '../../projectConfig/ProjectConfigViewer/ProjectGlobalConfigViewer/ProjectEarlyStopConfig/ProjectEarlyStopConfig';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import { EarlyStopConfig, ProjectConfig } from '../../../../API/project/types';
import { useSocket } from '../../../../core/Socket/hooks/useSocket';
import { ProjectEarlyStopConfigChangeDto } from '../../../../core/Socket/dto/project.earlystopconfig.change.dto';

const ProjectEarlyStopConfigShareModeContainer = ({ earlyStopConfig }: Omit<EarlyStopConfigProps, 'onChange'>) => {
	const { setProjectConfig } = useProjectConfig();
	const { socketService } = useSocket();

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;

			const dto = new ProjectEarlyStopConfigChangeDto();
			dto.name = name;
			dto.value = value;
			socketService?.changeProjectEarlyStopConfig(dto);

			setProjectConfig((state) => ({
				...(state as ProjectConfig),
				early_stop: {
					...(state?.early_stop as EarlyStopConfig),
					[name]: value,
				},
			}));
		},
		[setProjectConfig, socketService]
	);

	return <ProjectEarlyStopConfig onChange={onChange} earlyStopConfig={earlyStopConfig} />;
};

export default ProjectEarlyStopConfigShareModeContainer;
