import { useCallback, useEffect, useState } from "react";
import { atom, useRecoilState } from 'recoil';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import useSWR from 'swr';
import * as queryString from 'querystring';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';
import ProjectDatasetNavOptionContent from './ProjectDatasetNavOptionContent';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import config from '../../../../config';
import { PageNation } from '../../../../API/Dataset/type';
import { sleep } from '../../../../util';
import { DEFAULT_PAGE_SIZE, IGetProjectListParams } from '../../../../API/project/types';
import usePageNation from '../../../utils/pagenation/usePageNation';

export type NormalizationConfig = {
	usage: boolean;
	method: string;
};

export interface DatasetConfigDto {
	id: number;
	name: string;
	dataset_id: number;
	shuffle: boolean;
	label: string;
	normalization: NormalizationConfig;
}

export class DatasetConfig {
	id: number;

	name: string;

	dataset_id: number;

	shuffle: boolean;

	label: string;

	normalization: NormalizationConfig;

	constructor(dto: DatasetConfigDto) {
		this.id = dto?.id || 0;
		this.name = dto?.name || '';
		this.dataset_id = dto?.dataset_id || 0;
		this.shuffle = dto?.shuffle || false;
		this.label = dto?.label || '';
		this.normalization = dto?.normalization || { usage: false, method: '' };
	}

	static toDatasetConfigDto(datasetConfig: DatasetConfig) {
		const datasetConfigDto: DatasetConfigDto = {
			id: datasetConfig.id,
			name: datasetConfig.name,
			dataset_id: datasetConfig.dataset_id,
			shuffle: datasetConfig.shuffle,
			label: datasetConfig.label,
			normalization: datasetConfig.normalization,
		};

		return datasetConfigDto;
	}
}

export interface IGetProjectDatasetConfigListParams {
	curPage?: string;
	pageSize?: number;
	sort?: string;
	filterTypes?: string;
	filterString?: string;
}

export class GetProjectDatasetConfigListParams implements IGetProjectDatasetConfigListParams {
	curPage: string;

	pageSize: number;

	sort: string;

	filterString: string;

	filterTypes: string;

	constructor(projectDatasetConfigListParams?: IGetProjectDatasetConfigListParams) {
		this.curPage = projectDatasetConfigListParams?.curPage || '';
		this.pageSize = projectDatasetConfigListParams?.pageSize || DEFAULT_PAGE_SIZE;
		this.sort = projectDatasetConfigListParams?.sort || '';
		this.filterString = projectDatasetConfigListParams?.filterString || '';
		this.filterTypes = projectDatasetConfigListParams?.filterString || '';
	}
}

export interface DatasetConfigs {
	datsetConfigs: DatasetConfig[];
	pagenation: PageNation;
}

type Props =
	| {
			params?: IGetProjectDatasetConfigListParams;
	  }
	| undefined;

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

const ProjectDatasetNavOptionContentContainer = () => {
	const { projectNo } = useProjectLocation();
	const [datasetConfigListParams, setDatasetConfigListParams] = useState(new GetProjectDatasetConfigListParams());
	const { data, mutate } = useDatasetConfigList(projectNo, { params: datasetConfigListParams });
	const { item, page } = usePageNation({
		lastPage: data?.pagenation.lastPage,
	});
	const onSave = useCallback(() => {
		console.log('Add Update dataset config api fetcher');
	}, []);

	useEffect(() => {
		setDatasetConfigListParams(
			new GetProjectDatasetConfigListParams({
				curPage: page.toString(),
			})
		);
	}, [page]);

	return <>{<ProjectDatasetNavOptionContent onSave={onSave} /> || <CircleLoading />}</>;
};

export default ProjectDatasetNavOptionContentContainer;
