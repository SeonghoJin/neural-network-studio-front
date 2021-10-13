import { atom, useRecoilState } from 'recoil';
import { useCallback } from 'react';
import { AxiosError } from 'axios';
import { createProject } from '../API/project';
import { IProjectInfo } from '../API/project/types';
import { sleep } from '../util';
import SimpleBackdrop from '../components/utils/BackLoading';
import useUpdateProjectContent from './useUpdateProjectContent';

type CreateProjectResult = {
	error: null | AxiosError;
	data: null | { projectNo: string };
	loading: boolean;
} | null;

const createProjectResultState = atom<CreateProjectResult>({
	key: 'createProjectResultState',
	default: null,
});

const useCreateProject = () => {
	const [result, setResult] = useRecoilState(createProjectResultState);
	const updateProjectContent = useUpdateProjectContent();
	const fetch = useCallback(
		async (projectInfo: IProjectInfo) => {
			setResult({
				error: null,
				data: null,
				loading: true,
			});

			const state = await sleep(500).then(async () => {
				try {
					const data = await createProject(projectInfo);
					if (!data) {
						throw new Error('프로젝트가 생성되지 않았습니다. ');
					}
					await updateProjectContent.fetch(data.projectNo, {
						flowState: {
							elements: [],
							zoom: 1,
							position: [100, 100],
						},
						output: '',
					});
					setResult({
						error: null,
						data,
						loading: false,
					});
					return data;
				} catch (e: AxiosError | any) {
					setResult({
						error: e,
						data: null,
						loading: false,
					});
					throw e;
				}
			});

			return state;
		},
		[setResult, updateProjectContent]
	);

	return {
		...result,
		fetch,
		loading: result?.loading,
		loadingFallback: <SimpleBackdrop open />,
	};
};

export default useCreateProject;
