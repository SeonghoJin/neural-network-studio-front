import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { atom, useRecoilState } from 'recoil';
import { useCallback, useEffect } from 'react';
import useSWR from 'swr';
import config from '../../../config';
import { sleep } from '../../../util';
import {
	Epoch,
	EpochList,
	GetTrainHistoryEpochListLibraryAPIResultType,
	GetTrainHistoryListAPIResponse,
	TrainHistory,
} from './types';
import useProjectLocation from '../../../hooks/useProjectLocation';
import SimpleBackdrop from '../../utils/BackLoading';

const axiosConfig: AxiosRequestConfig = {
	withCredentials: true,
};

const getTrainHistoryListLibraryAPIResult = atom<GetTrainHistoryListLibraryAPIResultType>({
	key: 'getTrainHistoryListLibraryAPIResult',
	default: null,
});

export const getTrainHistoryListAPI = async (projectNo: string) => {
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
		const uri = `${config.SERVER_PREFIX}/api/project/${projectNo}/train/${trainNo}/epoch`;
		const response = await axios.get<{ epochs: Epoch[] }>(uri, axiosConfig);
		return response.data;
	} catch (e) {
		throw new Error('TrainHistoryEpochList를 가져오지 못했습니다. 다시 시도해주세요.');
	}
};

export const useGetTrainHistoryListLibraryAPI = () => {
	const [result, setResult] = useRecoilState<GetTrainHistoryListLibraryAPIResultType>(
		getTrainHistoryListLibraryAPIResult
	);

	const { projectNo } = useProjectLocation();

	const fetch = useCallback(
		async (_projectNo: string) => {
			setResult({
				loading: true,
				data: null,
				error: null,
			});

			const delayedData = await sleep(300)
				.then(async () => {
					const data = await getTrainHistoryListAPI(_projectNo);
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
		if (result == null) {
			fetch(projectNo);
		}
	}, [fetch, projectNo, result, setResult]);

	useEffect(() => {
		return () => {
			setResult(null);
		};
	}, [projectNo, setResult]);

	return {
		fetch,
		...result,
		loadingFallback: <SimpleBackdrop open />,
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

export const useProjectTrainEpochs = (trainNo: number) => {
	const { projectNo } = useProjectLocation();

	const getProjectTrainEpochResult = useSWR<EpochList, AxiosError>(
		() => ['getProjectTrainEpochResult', trainNo, projectNo],
		async () => {
			try {
				const data = await getTrainHistoryEpochListAPI(parseInt(projectNo, 10), trainNo);
				return data;
			} catch (e: AxiosError | any) {
				return e;
			}
		}
	);

	return {
		...getProjectTrainEpochResult,
		loading: !getProjectTrainEpochResult.data && !getProjectTrainEpochResult.error,
	};
};
