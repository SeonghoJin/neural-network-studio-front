import useSWR from 'swr';
import { AxiosError } from 'axios';
import { atom, useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { DatasetConfigs } from '../components/project/projectDataset/types';
import { getDatasetConfigList } from '../components/project/projectDataset/apis';
import useProjectLocation from './useProjectLocation';

const datasetConfigListState = atom<DatasetConfigs | null>({
	key: 'datasetConfigListState',
	default: null,
});

export const useDatasetConfigList = () => {
	const { projectNo } = useProjectLocation();
	const [datasetConfigList, setDatasetConfigList] = useRecoilState<DatasetConfigs | null>(datasetConfigListState);

	const result = useSWR<DatasetConfigs, AxiosError>(
		() => ['getDatasetConfigsResult', projectNo],
		async () => {
			const data = await getDatasetConfigList(projectNo);
			return data;
		}
	);

	useEffect(() => {
		if (result?.data != null) {
			setDatasetConfigList(result.data);
		}
	}, [setDatasetConfigList, result.data]);

	return {
		loading: !result.data,
		mutate: result.mutate,
		datasetConfigList,
		setDatasetConfigList,
	};
};
