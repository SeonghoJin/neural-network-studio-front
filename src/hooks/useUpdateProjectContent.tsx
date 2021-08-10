import { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';
import StandardModal from '../components/utils/modal/StandardModal';
import { updateProjectContent } from '../API/project';
import { IProjectContentDto } from '../API/project/types';

type PutProjectContentResultState = {
	error: null | string;
	loading: boolean;
	data: boolean | null;
} | null;

const updateProjectRequestResult = atom<PutProjectContentResultState>({
	key: 'updateProjectRequestResult',
	default: null,
});

const useUpdateProjectContent = () => {
	const [result, setResult] = useRecoilState(updateProjectRequestResult);
	const fetch = useCallback(
		async (projectNo: string, projectContent: IProjectContentDto) => {
			setResult({
				error: null,
				data: null,
				loading: true,
			});
			try {
				const response = await updateProjectContent(projectNo, projectContent);
				setResult({
					loading: false,
					error: null,
					data: response.data || true,
				});
				return true;
			} catch (e) {
				setResult({
					data: null,
					loading: false,
					error: e,
				});
				return false;
			}
		},
		[setResult]
	);

	return {
		...result,
		fetch,
		errorModal: <StandardModal head="error" body={result?.error} />,
	};
};

export default useUpdateProjectContent;
