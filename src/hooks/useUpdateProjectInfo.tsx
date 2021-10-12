import { atom, useRecoilState } from 'recoil';
import { useCallback } from 'react';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { updateProjectInfo } from '../API/project';
import { IProjectInfo } from '../API/project/types';
import { sleep } from '../util';
import { StaticPath } from '../components/PagePathConsts';

type UpdateProjectInfoState = {
	error: null | AxiosError;
	loading: boolean;
	data: boolean | null;
} | null;

const updateProjectInfoResult = atom<UpdateProjectInfoState>({
	key: 'updateProjectInfoResult',
	default: null,
});

const useUpdateProjectInfo = () => {
	const [result, setResult] = useRecoilState(updateProjectInfoResult);
	const { enqueueSnackbar } = useSnackbar();
	const history = useHistory();
	const fetch = useCallback(
		async (projectNo: string, projectInfo: IProjectInfo) => {
			setResult({
				data: null,
				error: null,
				loading: true,
			});

			try {
				const delayedData = await sleep(500).then(async () => {
					const data = await updateProjectInfo(projectNo, projectInfo);
					setResult({
						data: data || true,
						error: null,
						loading: false,
					});
					return true;
				});
				enqueueSnackbar('저장되었습니다.', { variant: 'success' });
				history.push(StaticPath.DASHBOARD_PROJECTS);
				return delayedData;
			} catch (e: AxiosError | any) {
				setResult({
					data: null,
					loading: false,
					error: e,
				});
				enqueueSnackbar(e.message, { variant: 'error' });
				return null;
			}
		},
		[enqueueSnackbar, history, setResult]
	);

	return {
		...result,
		loading: result?.loading,
		fetch,
	};
};

export default useUpdateProjectInfo;
