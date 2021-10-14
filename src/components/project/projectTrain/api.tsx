import axios, { AxiosRequestConfig } from 'axios';
import { atom, useRecoilState } from 'recoil';
import { useCallback } from 'react';
import config from '../../../config';
import { sleep } from '../../../util';
import { GetTrainHistoryEpochListLibraryAPIResultType, GetTrainHistoryListAPIResponse, TrainHistory } from './types';

const axiosConfig: AxiosRequestConfig = {
	withCredentials: true,
};

const getTrainHistoryListLibraryAPIResult = atom<GetTrainHistoryListLibraryAPIResultType>({
	key: 'getTrainHistoryListLibraryAPIResult',
	default: null,
});

export const getTrainHistoryListAPI = async (projectNo: number) => {
	try {
		const uri = `${config.SERVER_PREFIX}/api/project/${projectNo}/train`;
		const response = await axios.get<{ history: TrainHistory[] }>(uri, axiosConfig);
		return response.data;
	} catch (e) {
		throw new Error('TrainHistoryList를 가져오지 못했습니다. 다시 시도해주세요.');
	}
};

export const getTrainHistoryEpochListAPI = async (projectNo: number, trainNo: number) => {
	try {
		const uri = `${config.SERVER_PREFIX}/api/project/${projectNo}/train/${trainNo}`;
		const response = await axios.get(uri, axiosConfig);
		return response.data;
	} catch (e) {
		throw new Error('TrainHistoryEpochList를 가져오지 못했습니다. 다시 시도해주세요.');
	}
};

export const useGetTrainHistoryListLibraryAPI = () => {
	const [result, setResult] = useRecoilState<GetTrainHistoryListLibraryAPIResultType>(
		getTrainHistoryListLibraryAPIResult
	);

	const fetch = useCallback(
		async (projectNo: number) => {
			setResult({
				loading: true,
				data: null,
				error: null,
			});

			const delayedData = await sleep(300)
				.then(async () => {
					const data = await getTrainHistoryListAPI(projectNo);
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

	return {
		fetch,
		...result,
	};
};

type GetTrainHistoryListLibraryAPIResultType = {
	loading: boolean;
	data: null | GetTrainHistoryListAPIResponse;
	error: Error | null;
} | null;

const getTrainHistoryEpochListLibraryAPIResult = atom<GetTrainHistoryEpochListLibraryAPIResultType>({
	key: 'getTrainHistoryListLibraryAPIResult',
	default: null,
});

export const useGetTrainHistoryEpochListLibraryAPI = () => {
	const [result, setResult] = useRecoilState<GetTrainHistoryEpochListLibraryAPIResultType>(
		getTrainHistoryEpochListLibraryAPIResult
	);

	const fetch = useCallback(
		async (projectNo: number, trainNo: number) => {
			setResult({
				loading: true,
				data: null,
				error: null,
			});

			const delayedData = await sleep(300)
				.then(async () => {
					const data = await getTrainHistoryEpochListAPI(projectNo, trainNo);
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

	return {
		fetch,
		...result,
	};
};
