import { atom, useRecoilState } from 'recoil';
import { useCallback, useEffect } from 'react';
import { AxiosError } from 'axios';
import { updateProjectConfig } from '../API/project';
import { ProjectConfig } from '../API/project/types';
import { sleep } from '../util';
import SimpleBackdrop from '../components/utils/BackLoading';

type UpdateProjectConfigState = {
	error: null | string;
	loading: boolean;
	data: boolean | null;
} | null;

const updateProjectConfigResult = atom<UpdateProjectConfigState>({
	key: 'updateProjectConfigResult',
	default: null,
});

const useUpdateProjectConfig = () => {
	const [result, setResult] = useRecoilState(updateProjectConfigResult);

	const fetch = useCallback(
		async (projectNo: string, projectConfig: ProjectConfig) => {
			setResult({
				data: null,
				error: null,
				loading: true,
			});

			try {
				const delayedData = await sleep(500).then(async () => {
					const data = await updateProjectConfig(projectNo, projectConfig);
					setResult({
						data: data || true,
						error: null,
						loading: false,
					});
					return true;
				});
				return delayedData;
			} catch (e: AxiosError | any) {
				setResult({
					data: null,
					loading: false,
					error: e.message,
				});
				throw e;
			}
		},
		[setResult]
	);

	return {
		...result,
		fetch,
		loadingFallback: <SimpleBackdrop open />,
	};
};

export default useUpdateProjectConfig;
