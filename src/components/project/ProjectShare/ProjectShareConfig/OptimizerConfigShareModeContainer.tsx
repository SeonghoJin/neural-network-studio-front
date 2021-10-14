import { ChangeEvent, useCallback } from 'react';
import OptimizerConfig, {
	OptimizerConfigProps,
} from '../../projectConfig/ProjectConfigViewer/ProjectOptimizerConfigViewer/ProjectOptimizerConfig';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import { ProjectConfigChangeDto } from '../../../../core/Socket/dto/project.config.change.dto';
import { useSocket } from '../../../../core/Socket/hooks/useSocket';

const OptimizerConfigShareModeContainer = ({
	projectConfig,
}: Omit<OptimizerConfigProps, 'onChange' | 'onOptimizerConfigChange'>) => {
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
	const onOptimizerConfigChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setProjectConfig({
				...projectConfig,
				optimizer_config: {
					...projectConfig.optimizer_config,
					[name]: value,
				},
			});
		},
		[projectConfig, setProjectConfig]
	);

	return (
		<OptimizerConfig
			projectConfig={projectConfig}
			onChange={onChange}
			onOptimizerConfigChange={onOptimizerConfigChange}
		/>
	);
};

export default OptimizerConfigShareModeContainer;
