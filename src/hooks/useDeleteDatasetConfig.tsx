import { atom, useRecoilState } from 'recoil';
import { useCallback } from 'react';
import { AxiosError } from 'axios';
import { createProject } from '../API/project';
import { IProjectInfo } from '../API/project/types';
import { sleep } from '../util';

type DeleteDatasetResultType = {
	error: null | Error | AxiosError;
	data: boolean;
	loading: boolean;
} | null;

const deleteDatasetResultState = atom<DeleteDatasetResultType>({
	key: 'deleteDatasetResultState',
	default: null,
});

const useDeleteDatasetConfig = () => {
	const [result, setResult] = useRecoilState(deleteDatasetResultState);
	const fetch = useCallback(
		async (projectInfo: IProjectInfo) => {
			setResult({
				error: null,
				data: false,
				loading: true,
			});

			const state = await sleep(500).then(async () => {
				try {
					const data = await createProject(projectInfo);
					setResult({
						error: null,
						data: true,
						loading: false,
					});
					return data;
				} catch (e: AxiosError | any) {
					setResult({
						error: e,
						data: false,
						loading: false,
					});
					throw e;
				}
			});

			return state;
		},
		[setResult]
	);

	return {
		...result,
		fetch,
	};
};

export default useDeleteDatasetConfig;
