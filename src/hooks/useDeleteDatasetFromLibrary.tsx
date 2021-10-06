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
		async (datasetId: number) => {
			setResult({
				error: null,
				data: false,
				loading: true,
			});

			const delayedData = await sleep(500)
				.then(async () => {
					const data = await deleteDatasetFromLibraryAPI(datasetId);
					if (data !== null) {
						throw new Error('라이브러리에 데이터셋을 삭제하지 못했습니다. 다시 시도해주세요.');
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
	};
};
