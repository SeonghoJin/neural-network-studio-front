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

const useUploadFileAndUpdateDataset = () => {
	const [uploadFileAndUpdateDatasetResultState, setUploadFileAndUpdateDatasetResultState] =
		useRecoilState<UploadFileAndUpdateDatasetResultType>(uploadFileAndUpdateDatasetResult);

	const fetch = (formData: UploadNewDatasetFormData, updateDataset: Omit<UpdateDataset, 'id'>) => {
		setUploadFileAndUpdateDatasetResultState({
			loading: true,
			error: null,
			data: null,
		});

		sleep(500)
			.then(async () => {
				const { id } = await uploadNewDatasetFileAPI(formData);
				const response = await updateDatasetAPI({
					id,
					...updateDataset,
				});

				if (response === null) {
					setUploadFileAndUpdateDatasetResultState({
						loading: false,
						error: null,
						data: true,
					});
				} else {
					throw new Error('데이터 업데이트에 실패했습니다.');
				}
			})
			.catch((e) => {
				throw new Error(e.message);
			});
	};

	return {
		fetch,
		uploadFileAndUpdateDatasetResultState,
	};
};
