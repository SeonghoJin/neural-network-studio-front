import { ChangeEvent, useCallback } from 'react';
import ProjectLearningRateReductionConfig, {
	ProjectLearningRateReductionConfigProps,
} from '../../projectConfig/ProjectConfigViewer/ProjectGlobalConfigViewer/ProjectLearningRateReductionConfig/ProjectLearningRateReductionConfig';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import { ILearningRateReductionConfig, IProjectConfig } from '../../../../API/project/types';
import { useSocket } from '../../../../core/Socket/hooks/useSocket';
import { ProjectLearningRateReductionChangeDto } from '../../../../core/Socket/dto/project.learningratereduction.change.dto';

const ProjectLearningRateReductionConfigShareModeContainer = ({
	learningRateReduction,
}: Omit<ProjectLearningRateReductionConfigProps, 'onChange'>) => {
	const { setProjectConfig } = useProjectConfig();
	const { socketService } = useSocket();
	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			const dto = new ProjectLearningRateReductionChangeDto();
			dto.name = name;
			dto.value = value;
			socketService?.changeLearningRateReduction(dto);
			setProjectConfig((state) => ({
				...(state as IProjectConfig),
				learning_rate_reduction: {
					...(state?.learning_rate_reduction as ILearningRateReductionConfig),
					[name]: value,
				},
			}));
		},
		[setProjectConfig, socketService]
	);

	return <ProjectLearningRateReductionConfig learningRateReduction={learningRateReduction} onChange={onChange} />;
};

export default ProjectLearningRateReductionConfigShareModeContainer;
