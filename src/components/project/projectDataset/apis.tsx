import queryString from 'querystring';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import useSWR from 'swr';
import { atom, useRecoilState } from 'recoil';
import { useCallback } from 'react';
import config from '../../../config';
import { sleep } from '../../../util';
import { DatasetConfigs, GetProjectDatasetConfigListParams, IGetProjectDatasetConfigListParams } from './types';
import { DatasetConfig, TDatasetConfig } from './datasetConfig';
import SimpleBackdrop from '../../utils/BackLoading';

const axiosConfig: AxiosRequestConfig = {
	withCredentials: true,
};

type PutDatasetConfigResultState = {
	error: null | string;
	loading: boolean;
	data: boolean | null;
} | null;

const updateDatasetConfigResult = atom<PutDatasetConfigResultState>({
	key: 'updateDatasetConfigResult',
	default: null,
});

interface IDatasetConfigDto {
	curPage: string;
	pageSize: number;
	sort: string;
	filterString: string;
	filterTypes: string;
}

export const updateDatasetConfig = async (projectNo: string, datasetConfig: DatasetConfig) => {
	try {
		const res = await axios.put(
			`${config.SERVER_PREFIX}/api/project/${projectNo}/dataset-config/${datasetConfig.id}`,
			DatasetConfig.toDatasetConfigDto(datasetConfig),
			axiosConfig
		);
		return res.data;
	} catch (e) {
		if ((e as AxiosError).response?.status === 400) {
			throw new Error('중복된 이름이거나, 레이블 값이 설정되지 않았습니다.');
		}
		if ((e as AxiosError).response?.status !== 200) {
			throw new Error('데이터셋 설정 저장에 실패했습니다. 다시 시도해주세요.');
		}
		throw e;
	}
};

export const useUpdateDatasetConfig = () => {
	const [result, setResult] = useRecoilState(updateDatasetConfigResult);
	const fetch = useCallback(
		async (projectNo: string, datasetConfig: DatasetConfig) => {
			setResult({
				error: null,
				data: null,
				loading: true,
			});

			try {
				const delayedData = await sleep(500).then(async () => {
					const data = await updateDatasetConfig(projectNo, datasetConfig);
					setResult({
						data: data || true,
						error: null,
						loading: false,
					});
					return true;
				});
				return delayedData;
			} catch (e: AxiosError | any) {
				setResult({
					data: null,
					loading: false,
					error: e.message,
				});
				throw e;
			}
		},
		[setResult]
	);

	return {
		...result,
		fetch,
		loadingFallback: <SimpleBackdrop open />,
	};
};

export const getDatasetConfigList = async (projectNo: string, params?: IGetProjectDatasetConfigListParams) => {
	const uri = `${config.SERVER_PREFIX}/api/project/${projectNo}/dataset-config?${queryString.stringify({
		...new GetProjectDatasetConfigListParams(params),
	})}`;

	const response = await axios.get<DatasetConfigs>(uri, axiosConfig);
	return response.data;
};
