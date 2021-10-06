import { atom, useRecoilState } from 'recoil';
import { useCallback } from 'react';
import { AxiosError } from 'axios';
import { sleep } from '../util';
import { addDatasetToLibraryAPI } from '../API/Dataset';

type AddDatasetToLibraryResultType = {
	error: null | AxiosError;
	data: boolean;
	loading: boolean;
} | null;

const addDatasetToLibraryResult = atom<AddDatasetToLibraryResultType>({
	key: 'addDatasetToLibraryResult',
	default: null,
});

export const useAddDatasetToLibrary = () => {
	const [result, setResult] = useRecoilState(addDatasetToLibraryResult);
	const fetch = useCallback(
		async (datasetId: number) => {
			setResult({
				error: null,
				data: false,
				loading: true,
			});

			const delayedData = await sleep(500)
				.then(async () => {
					const data = await addDatasetToLibraryAPI(datasetId);
					if (data !== null) {
						throw new Error('라이브러리에 데이터셋을 추가하지 못했습니다. 다시 시도해주세요.');
					}
					setResult({
						error: null,
						data: true,
						loading: false,
					});
				})
				.catch((e) => {
					throw new Error(e.message);
				});

			return delayedData;
		},
		[setResult]
	);

	return {
		...result,
		fetch,
		loading: result?.loading,
	};
};
