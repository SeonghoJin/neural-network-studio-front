import { AxiosError } from 'axios';
import { atom, useRecoilState } from 'recoil';
import { useCallback, useEffect } from 'react';
import { GetDatasetListAPIResponse } from '../API/Dataset/type';
import { sleep } from '../util';
import { getDatasetLibraryListAPI } from '../API/Dataset';

type GetDatasetListLibraryAPIResultType = {
	loading: boolean;
	data: null | GetDatasetListAPIResponse;
	error: Error | null;
} | null;

const getDatasetListLibraryAPIResult = atom<GetDatasetListLibraryAPIResultType>({
	key: 'getDatasetListLibraryAPIResult',
	default: null,
});

export const useGetDatasetListLibraryAPI = () => {
	const [result, setResult] = useRecoilState<GetDatasetListLibraryAPIResultType>(getDatasetListLibraryAPIResult);

	const fetch = useCallback(
		async (curPage: number, pageSize: number) => {
			setResult({
				loading: true,
				data: null,
				error: null,
			});

			const delayedData = await sleep(300)
				.then(async () => {
					const data = await getDatasetLibraryListAPI(curPage, pageSize);
					setResult({
						loading: false,
						data,
						error: null,
					});
					return data;
				})
				.catch((e) => {
					setResult({
						loading: false,
						data: null,
						error: e,
					});
					throw new Error(e);
				});

			return delayedData;
		},
		[setResult]
	);

	useEffect(() => {
		fetch(1, 100);
	}, [fetch]);

	return {
		fetch,
		...result,
		mutate: () => {
			fetch(1, 100);
		},
	};
};
