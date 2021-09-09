import { atom, useRecoilState } from 'recoil';
import { ProjectLearningRateReductionChangeDto } from '../dto/project.learningratereduction.change.dto';

type ProjectLearningRateReductionConfigChangeResult = ProjectLearningRateReductionChangeDto | null;

const projectLearningRateReductionConfigChangeResult = atom<ProjectLearningRateReductionConfigChangeResult>({
	key: 'projectLearningRateReductionConfigChangeResult',
	default: null,
});

export const useRemoteProjectLearningRateReductionConfigChange = () => {
	const [changeProjectLearningRateReductionConfig, setChangeProjectLearningRateReductionConfig] =
		useRecoilState<ProjectLearningRateReductionConfigChangeResult>(projectLearningRateReductionConfigChangeResult);

	return {
		changeProjectLearningRateReductionConfig,
		setChangeProjectLearningRateReductionConfig,
	};
};
