import { ChangeEvent, useCallback, useEffect } from 'react';
import ProjectEarlyStopConfig, {
	EarlyStopConfigProps,
} from '../../projectConfig/ProjectConfigViewer/ProjectGlobalConfigViewer/ProjectEarlyStopConfig/ProjectEarlyStopConfig';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import { IEarlyStopConfig, IProjectConfig } from '../../../../API/project/types';
import { useSocket } from '../../../../core/Socket/hooks/useSocket';
import { ProjectEarlyStopConfigChangeDto } from '../../../../core/Socket/dto/project.earlystopconfig.change.dto';
import { useRemoteProjectEarlyStopConfigChange } from '../../../../core/Socket/hooks/useProjectEarlyStopConfigChange';

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
				...(state as IProjectConfig),
				early_stop: {
					...(state?.early_stop as IEarlyStopConfig),
					[name]: value,
				},
			}));
		},
		[setProjectConfig, socketService]
	);

	return <ProjectEarlyStopConfig onChange={onChange} earlyStopConfig={earlyStopConfig} />;
};

export default ProjectEarlyStopConfigShareModeContainer;
