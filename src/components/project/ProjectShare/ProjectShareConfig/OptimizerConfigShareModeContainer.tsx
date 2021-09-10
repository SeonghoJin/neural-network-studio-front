import { ChangeEvent, useCallback } from 'react';
import OptimizerConfig, {
	OptimizerConfigProps,
} from '../../projectConfig/ProjectConfigViewer/ProjectOptimizerConfigViewer/ProjectOptimizerConfig';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import { ProjectConfigChangeDto } from '../../../../core/Socket/dto/project.config.change.dto';
import { useSocket } from '../../../../core/Socket/hooks/useSocket';

const OptimizerConfigShareModeContainer = ({ projectConfig }: Omit<OptimizerConfigProps, 'onChange'>) => {
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
				...projectConfig,
				[name]: value,
			});
		},
		[projectConfig, setProjectConfig, socketService]
	);

	return <OptimizerConfig projectConfig={projectConfig} onChange={onChange} />;
};

export default OptimizerConfigShareModeContainer;
