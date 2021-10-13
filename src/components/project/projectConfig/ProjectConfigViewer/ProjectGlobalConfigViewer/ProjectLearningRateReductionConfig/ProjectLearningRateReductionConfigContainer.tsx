import { ChangeEvent, useCallback } from 'react';
import { LearningRateReductionConfig, ProjectConfig } from '../../../../../../API/project/types';
import ProjectLearningRateReductionConfig, {
	ProjectLearningRateReductionConfigProps,
} from './ProjectLearningRateReductionConfig';
import useProjectConfig from '../../../../../../hooks/useProjectConfig';

const ProjectLearningRateReductionConfigContainer = ({
	learningRateReduction,
}: Omit<ProjectLearningRateReductionConfigProps, 'onChange'>) => {
	const { setProjectConfig } = useProjectConfig();

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;
			setProjectConfig((state) => ({
				...(state as ProjectConfig),
				learning_rate_reduction: {
					...(state?.learning_rate_reduction as LearningRateReductionConfig),
					[name]: value,
				},
			}));
		},
		[setProjectConfig]
	);

	return <ProjectLearningRateReductionConfig learningRateReduction={learningRateReduction} onChange={onChange} />;
};

export default ProjectLearningRateReductionConfigContainer;
