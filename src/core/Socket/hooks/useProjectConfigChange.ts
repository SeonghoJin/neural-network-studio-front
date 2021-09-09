import { atom, useRecoilState } from 'recoil';
import { ProjectConfigChangeDto } from '../dto/project.config.change.dto';

type ProjectConfigChangeResult = ProjectConfigChangeDto | null;

const projectConfigChangeResult = atom<ProjectConfigChangeResult>({
	key: 'projectConfigChangeResult',
	default: null,
});

export const useRemoteProjectConfigChange = () => {
	const [changeProjectConfig, setChangeProjectConfig] =
		useRecoilState<ProjectConfigChangeResult>(projectConfigChangeResult);

	return {
		changeProjectConfig,
		setChangeProjectConfig,
	};
};
