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
		async (datasetId: string) => {
			setResult({
				error: null,
				data: false,
				loading: true,
			});

			const delayedData = await sleep(500)
				.then(async () => {
					await addDatasetToLibraryAPI(datasetId);
					setResult({
						error: null,
						data: true,
						loading: false,
					});
				})
				.catch((e) => {
					setResult({
						error: e,
						data: false,
						loading: false,
					});
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
