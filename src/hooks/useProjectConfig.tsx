import { atom, useRecoilState } from 'recoil';
import useSWR from 'swr';
import { useEffect } from 'react';
import { AxiosError } from 'axios';

import { ProjectConfig } from '../API/project/types';
import { getProjectConfig } from '../API/project';
import useProjectLocation from './useProjectLocation';

export type ProjectConfigState = ProjectConfig | null;

const projectConfigState = atom<ProjectConfigState>({
	key: 'ProjectConfigState',
	default: null,
});

const useProjectConfig = () => {
	const { projectNo } = useProjectLocation();
	const [projectConfig, setProjectConfig] = useRecoilState(projectConfigState);

	const getProjectConfigResult = useSWR<ProjectConfig, AxiosError>(
		() => 'getProjectConfigResult',
		async () => {
			try {
				const data = await getProjectConfig(projectNo);
				return data;
			} catch (e: AxiosError | any) {
				return e;
			}
		}
	);

	useEffect(() => {
		if (getProjectConfigResult.data != null) {
			setProjectConfig(getProjectConfigResult.data);
		}
	}, [getProjectConfigResult.data, setProjectConfig]);

	return {
		loading: !setProjectConfig && !getProjectConfigResult.error,
		error: getProjectConfigResult.error,
		mutate: getProjectConfigResult.mutate,
		projectConfig,
		setProjectConfig,
	};
};

export default useProjectConfig;
