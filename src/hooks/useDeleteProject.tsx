import { atom, useRecoilState } from 'recoil';
import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';
import { deleteProject } from '../API/project';
import StandardModal from '../components/utils/modal/StandardModal';
import SimpleBackdrop from '../components/utils/BackLoading';
import { sleep } from '../util';

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
	const history = useHistory();
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
					return true;
				} catch (e) {
					setResult({
						error: e,
						data: null,
						loading: false,
					});
					return false;
				}
			});
			return delayedData;
		},
		[setResult]
	);

	useEffect(() => {
		return () => {
			setResult(null);
		};
	}, [setResult]);

	return {
		...result,
		fetch,
		successFeedback: result?.data && (
			<StandardModal
				head="삭제완료했습니다."
				body=""
				onClose={async () => {
					history.go(0);
				}}
			/>
		),
		loadingFeedback: result?.loading && <SimpleBackdrop open={result?.loading} />,
		errorFeedback: result?.error && <StandardModal head={result.error.name} />,
	};
};

export default useDeleteProject;
