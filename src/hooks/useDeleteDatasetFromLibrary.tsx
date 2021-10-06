import { atom, useRecoilState } from 'recoil';
import { useCallback } from 'react';
import { AxiosError } from 'axios';
import { sleep } from '../util';
import { deleteDatasetFromLibraryAPI } from '../API/Dataset';

type DeleteDatasetFromLibraryResultType = {
	error: null | AxiosError;
	data: boolean;
	loading: boolean;
} | null;

const deleteDatasetFromLibraryResult = atom<DeleteDatasetFromLibraryResultType>({
	key: 'deleteDatasetFromLibraryResult',
	default: null,
});

export const useDeleteDatasetFromLibrary = () => {
	const [result, setResult] = useRecoilState(deleteDatasetFromLibraryResult);
	const fetch = useCallback(
		async (datasetId: string) => {
			setResult({
				error: null,
				data: false,
				loading: true,
			});

			const delayedData = await sleep(500)
				.then(async () => {
					await deleteDatasetFromLibraryAPI(datasetId);
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
	};
};
