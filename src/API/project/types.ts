// eslint-disable-next-line max-classes-per-file
import { FlowExportObject } from 'react-flow-renderer';

export interface IProjectDto {
	config: IProjectConfig;
	content: IProjectContentDto;
	description: string;
	lastModify: Date;
	name: string;
	projectNo: string;
}

export interface IProjectContentDto {
	flowState: FlowExportObject;
	output: string;
}

export interface IProjectGlobalConfig {
	epochs?: number;

	batch_size?: number;
}

export interface IProjectOptimizerConfig {
	learning_rate?: number;

	loss?: string;

	metrics?: string[];

	optimizer?: string;
}

export interface IProjectConfig extends IProjectOptimizerConfig, IProjectGlobalConfig {}

export class ProjectConfig implements IProjectConfig {
	batch_size?: number;

	epochs?: number;

	learning_rate?: number;

	loss?: string;

	metrics?: string[];

	optimizer?: string;

	constructor(config?: ProjectConfig) {
		this.optimizer = config?.optimizer || 'adam';
		this.learning_rate = config?.learning_rate || 0.001;
		this.loss = config?.loss || 'sparse_categorical_crossentropy';
		this.metrics = config?.metrics || ['accuray'];
		this.batch_size = config?.batch_size || 32;
		this.epochs = config?.epochs || 10;
	}
}

export interface IProjectInfo {
	description: string;
	name: string;
}

export interface IGetProjectListParams {
	curPage?: string;
	pageSize?: number;
	sort?: string;
	filterTypes?: string;
	filterString?: string;
}

export const DEFAULT_PAGE_SIZE = 8;

export class GetProjectListParams implements IGetProjectListParams {
	curPage: string;

	pageSize: number;

	sort: string;

	filterString: string;

	filterTypes: string;

	constructor(projectListParams?: IGetProjectListParams) {
		this.curPage = projectListParams?.curPage || '';
		this.pageSize = projectListParams?.pageSize || DEFAULT_PAGE_SIZE;
		this.sort = projectListParams?.sort || '';
		this.filterString = projectListParams?.filterString || '';
		this.filterTypes = projectListParams?.filterString || '';
	}
}

export interface Projects {
	projects: Project[];
	pagination: Pagination;
}

export interface Pagination {
	curPage: number;
	pageSize: number;
	lastPage: number;
	itemCount: number;
}

export interface Project {
	projectNo: number;
	name: string;
	description: string;
	lastModify: Date;
}
