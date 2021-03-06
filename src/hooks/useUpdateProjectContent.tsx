import { useCallback, useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { AxiosError } from 'axios';
import { updateProjectContent } from '../API/project';
import { IProjectContentDto } from '../API/project/types';
import { sleep } from '../util';
import SimpleBackdrop from '../components/utils/BackLoading';

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

			const delayedData = await sleep(500).then(async () => {
				try {
					const response = await updateProjectContent(projectNo, projectContent);
					setResult({
						loading: false,
						error: null,
						data: response || true,
					});
					return {
						projectNo,
						projectContent,
					};
				} catch (e: AxiosError | any) {
					setResult({
						data: null,
						loading: false,
						error: e.message,
					});
					throw e;
				}
			});

			return delayedData;
		},
		[setResult]
	);

	return {
		...result,
		fetch,
		loadingFallback: <SimpleBackdrop open />,
	};
};

useUpdateProjectContent.defaultProps = {
	onCloseSuccessFeedback: null,
};

useUpdateProjectContent.defaultProps = {};

export default useUpdateProjectContent;
