import queryString from 'querystring';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import useSWR from 'swr';
import config from '../../../config';
import { sleep } from '../../../util';
import { DatasetConfigs, GetProjectDatasetConfigListParams, IGetProjectDatasetConfigListParams } from './types';

const axiosConfig: AxiosRequestConfig = {
	withCredentials: true,
};

export const getDatasetConfigList = async (projectNo: string, params?: IGetProjectDatasetConfigListParams) => {
	const uri = `${config.SERVER_PREFIX}/api/project/${projectNo}/dataset-config?${queryString.stringify({
		...new GetProjectDatasetConfigListParams(params),
	})}`;

	const response = await axios.get<DatasetConfigs>(uri, axiosConfig);
	return response.data;
};

type Props =
	| {
			params?: IGetProjectDatasetConfigListParams;
	  }
	| undefined;

export const useDatasetConfigList = (projectNo: string, props: Props = undefined) => {
	const result = useSWR<DatasetConfigs, AxiosError>(
		() => ['getDatasetConfigsResult', props?.params],
		async (key, value) => {
			const data = await sleep(300).then(async () => {
				const delayedData = await getDatasetConfigList(projectNo, value);
				return delayedData;
			});
			return data;
		}
	);

	return {
		loading: !result.data,
		...result,
	};
};
