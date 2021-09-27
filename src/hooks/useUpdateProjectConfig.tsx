import { atom, useRecoilState } from 'recoil';
import { useCallback, useEffect } from 'react';
import { AxiosError } from 'axios';
import StandardModal from '../components/utils/modal/StandardModal';
import { updateProjectConfig } from '../API/project';
import { IProjectConfig } from '../API/project/types';
import { sleep } from '../util';
import SimpleBackdrop from '../components/utils/BackLoading';
import SuccessSnackbar from '../components/utils/Snackbar/SuccessSnackbar';

type UpdateProjectConfigState = {
	error: null | AxiosError;
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
		async (projectNo: string, projectConfig: IProjectConfig) => {
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
					error: e,
				});
				return null;
			}
		},
		[setResult]
	);

	return {
		...result,
		fetch,
		loadingFeedback: result?.loading && <SimpleBackdrop open />,
		successFeedback: result?.data && <SuccessSnackbar message="저장되었습니다." open />,
		errorFeedback: result?.error && <StandardModal head="error" body={result?.error?.name} />,
	};
};

export default useUpdateProjectConfig;
