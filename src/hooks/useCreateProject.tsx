import { atom, useRecoilState } from 'recoil';
import { useCallback, useEffect } from 'react';
import { AxiosError } from 'axios';
import { Backdrop } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { huHU } from '@material-ui/core/locale';
import { createProject } from '../API/project';
import { IProjectInfo } from '../API/project/types';
import { sleep } from '../util';
import { StaticPath } from '../components/PagePathConsts';
import SimpleBackdrop from '../components/utils/BackLoading';

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
	const { enqueueSnackbar } = useSnackbar();
	const history = useHistory();

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
					setResult({
						error: null,
						data,
						loading: false,
					});
					history.push(StaticPath.DASHBOARD_PROJECTS);
					enqueueSnackbar('프로젝트가 생성되었습니다.', {
						variant: 'success',
					});
					return true;
				} catch (e: AxiosError | any) {
					setResult({
						error: e,
						data: null,
						loading: false,
					});
					enqueueSnackbar(e.message, {
						variant: 'error',
					});
					return false;
				}
			});

			return state;
		},
		[enqueueSnackbar, history, setResult]
	);

	return {
		...result,
		fetch,
		loading: result?.loading,
		loadingFallback: <SimpleBackdrop open />,
	};
};

export default useCreateProject;
