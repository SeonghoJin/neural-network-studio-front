import { atom, useRecoilState } from 'recoil';
import { useCallback } from 'react';
import { deleteProject } from '../API/project';

type DeleteProjectResultState = {
	error: null | string;
	data: null | any;
	loading: boolean;
} | null;

const deleteProjectResultState = atom<DeleteProjectResultState>({
	key: 'deleteProjectResultState',
	default: null,
});

const useDeleteProject = () => {
	const [result, setResult] = useRecoilState(deleteProjectResultState);

	const fetch = useCallback(
		async (projectNo: string) => {
			setResult({
				error: null,
				data: null,
				loading: true,
			});

			try {
				const data = deleteProject(projectNo);
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
		},
		[setResult]
	);

	return {
		...result,
		fetch,
	};
};

export default useDeleteProject;
