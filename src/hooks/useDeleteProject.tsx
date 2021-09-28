import { atom, useRecoilState } from 'recoil';
import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import { deleteProject } from '../API/project';
import StandardModal from '../components/utils/modal/StandardModal';
import SimpleBackdrop from '../components/utils/BackLoading';
import { sleep } from '../util';
import { CircleLoading } from '../components/utils/Loading/CircularLoading';

type DeleteProjectResultState = {
	error: null | AxiosError;
	data: null | any;
	loading: boolean;
} | null;

const deleteProjectResultState = atom<DeleteProjectResultState>({
	key: 'deleteProjectResultState',
	default: null,
});

const useDeleteProject = () => {
	const [result, setResult] = useRecoilState(deleteProjectResultState);
	const { enqueueSnackbar } = useSnackbar();
	const fetch = useCallback(
		async (projectNo: string) => {
			setResult({
				error: null,
				data: null,
				loading: true,
			});

			const delayedData = sleep(500).then(async () => {
				try {
					const data = await deleteProject(projectNo);
					setResult({
						error: null,
						data: data || true,
						loading: false,
					});
					enqueueSnackbar('프로젝트가 삭제되었습니다.', {
						variant: 'error',
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
			return delayedData;
		},
		[setResult, enqueueSnackbar]
	);

	return {
		...result,
		fetch,
		loading: result?.loading,
		loadingFallback: <SimpleBackdrop open />,
	};
};

export default useDeleteProject;
