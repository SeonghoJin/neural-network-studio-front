import { ChangeEvent, useCallback } from 'react';
import ProjectLearningRateReductionConfig, {
	ProjectLearningRateReductionConfigProps,
} from '../../projectConfig/ProjectConfigViewer/ProjectGlobalConfigViewer/ProjectLearningRateReductionConfig/ProjectLearningRateReductionConfig';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import { ILearningRateReductionConfig, IProjectConfig } from '../../../../API/project/types';

const ProjectLearningRateReductionConfigShareModeContainer = ({
	learningRateReduction,
}: Omit<ProjectLearningRateReductionConfigProps, 'onChange'>) => {
	const { setProjectConfig } = useProjectConfig();

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;

			setProjectConfig((state) => ({
				...(state as IProjectConfig),
				learning_rate_reduction: {
					...(state?.learning_rate_reduction as ILearningRateReductionConfig),
					[name]: value,
				},
			}));
		},
		[setProjectConfig]
	);

	return <ProjectLearningRateReductionConfig learningRateReduction={learningRateReduction} onChange={onChange} />;
};

export default ProjectLearningRateReductionConfigShareModeContainer;
