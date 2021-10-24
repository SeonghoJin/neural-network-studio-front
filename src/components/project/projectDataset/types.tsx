import { DEFAULT_PAGE_SIZE } from '../../../API/project/types';
import { PageNation } from '../../../API/Dataset/type';
import { DatasetInfo } from './datasetConfig';

export type NormalizationConfig = {
	usage: boolean;
	method: string;
};

export interface DatasetConfigDto {
	id: number;
	name: string;
	dataset: DatasetInfo;
	shuffle: boolean;
	label: string;
	normalization: NormalizationConfig;
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
	datasetConfigs: DatasetConfig[];
	pagenation: PageNation;
}

export type DatasetConfig = {
	id: number;
	name: string;
	dataset: DatasetInfo;
	shuffle: boolean;
	label: string;
	normalization: NormalizationConfig;
};
