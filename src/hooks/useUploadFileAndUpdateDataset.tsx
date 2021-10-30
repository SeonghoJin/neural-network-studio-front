import { AxiosError } from 'axios';
import { atom, useRecoilState } from 'recoil';
import { UpdateDataset, UploadNewDatasetFormData } from '../API/Dataset/type';
import { sleep } from '../util';
import { updateDatasetAPI, uploadNewDatasetFileAPI } from '../API/Dataset';

type UploadFileAndUpdateDatasetResultType = {
	loading: boolean;
	error: null | AxiosError;
	data: null | boolean;
} | null;

const uploadFileAndUpdateDatasetResult = atom<UploadFileAndUpdateDatasetResultType>({
	key: 'uploadFileAndUpdateDatasetResult',
	default: null,
});

export const useUploadFileAndUpdateDataset = () => {
	const [uploadFileAndUpdateDatasetResultState, setUploadFileAndUpdateDatasetResultState] =
		useRecoilState<UploadFileAndUpdateDatasetResultType>(uploadFileAndUpdateDatasetResult);

	const fetch = async (formData: UploadNewDatasetFormData, updateDataset: Omit<UpdateDataset, 'id'>) => {
		setUploadFileAndUpdateDatasetResultState({
			loading: true,
			error: null,
			data: null,
		});

		await sleep(500)
			.then(async () => {
				const { id } = await uploadNewDatasetFileAPI(formData);
				const response = await updateDatasetAPI({
					id,
					...updateDataset,
				});

				setUploadFileAndUpdateDatasetResultState({
					loading: false,
					error: null,
					data: true,
				});
			})
			.catch((e) => {
				setUploadFileAndUpdateDatasetResultState({
					loading: false,
					error: null,
					data: true,
				});
				throw new Error(e.message);
			});
	};

	return {
		fetch,
		loading: uploadFileAndUpdateDatasetResultState?.loading,
		error: uploadFileAndUpdateDatasetResultState?.error,
		uploadFileAndUpdateDatasetResultState,
	};
};
