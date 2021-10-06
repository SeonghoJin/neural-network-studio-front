import useSWR from 'swr';
import { AxiosError } from 'axios';
import * as queryString from 'querystring';
import { sleep } from '../util';
import { GetDatasetListAPIResponse, GetDatasetListQuery } from '../API/Dataset/type';
import { getDatasetListAPI } from '../API/Dataset';

type Props = {
	params: GetDatasetListQuery;
};

const useGetDatasetList = (props: Props) => {
	const result = useSWR<GetDatasetListAPIResponse, AxiosError>(
		() => [`getDatasetList+${queryString.stringify(props.params)}`, props.params],
		async (key, value) => {
			const data = await sleep(300).then(async () => {
				const delayedData = await getDatasetListAPI(value);
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

export default useGetDatasetList;
