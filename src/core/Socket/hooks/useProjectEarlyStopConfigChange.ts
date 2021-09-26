import { atom, useRecoilState } from 'recoil';
import { ProjectEarlyStopConfigChangeDto } from '../dto/project.earlystopconfig.change.dto';

type ProjectEarlyStopConfigChangeResult = ProjectEarlyStopConfigChangeDto | null;

const projectEarlyStopConfigChangeResult = atom<ProjectEarlyStopConfigChangeResult>({
	key: 'projectEarylStopConfigChangeResult',
	default: null,
});

export const useRemoteProjectEarlyStopConfigChange = () => {
	const [changeProjectEarlyStopConfig, setChangeProjectEarlyStopConfig] =
		useRecoilState<ProjectEarlyStopConfigChangeResult>(projectEarlyStopConfigChangeResult);

	return {
		changeProjectEarlyStopConfig,
		setChangeProjectEarlyStopConfig,
	};
};
