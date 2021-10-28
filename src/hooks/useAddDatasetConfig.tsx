import { atom, useRecoilState } from 'recoil';
import { useCallback } from 'react';
import { AxiosError } from 'axios';
import { addDatasetConfigAPI, addDatasetToLibraryAPI } from '../API/Dataset';
import { DatasetConfig } from '../components/project/projectDataset/datasetConfig';

type AddDatasetConfig = {
	error: null | AxiosError;
	data: boolean;
	loading: boolean;
} | null;

const addDatasetConfigResult = atom<AddDatasetConfig>({
	key: 'addDatasetConfigResult',
	default: null,
});

export const useAddDatasetConfig = () => {
	const [result, setResult] = useRecoilState(addDatasetConfigResult);
	const fetch = useCallback(
		async (datasetId: string, datasetConfig: DatasetConfig) => {
			setResult({
				error: null,
				data: false,
				loading: true,
			});
			const responseData = await addDatasetConfigAPI(datasetId, datasetConfig)
				.then((data) => {
					setResult({
						error: null,
						data: true,
						loading: false,
					});
					return data;
				})
				.catch((e) => {
					setResult({
						error: e,
						data: false,
						loading: false,
					});
					return null;
				});

			return responseData;
		},
		[setResult]
	);

	return {
		...result,
		fetch,
	};
};
