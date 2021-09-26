// eslint-disable-next-line max-classes-per-file
import { FlowExportObject } from 'react-flow-nns';
import Monitor from '../../core/Project/Montior';
import Optimizers from '../../core/Project/Optimizers';

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

export interface IEarlyStopConfig {
	usage: boolean;
	monitor: Monitor;
	patience: string;
}

export interface ILearningRateReductionConfig {
	usage: boolean;
	monitor: Monitor;
	patience: string;
	factor: string;
	min_lr: string;
}

export interface IProjectGlobalConfig {
	epochs: string;

	batch_size: string;

	early_stop: IEarlyStopConfig;

	learning_rate_reduction: ILearningRateReductionConfig;
}

export interface IProjectOptimizerConfig {
	learning_rate: string;

	loss: string;

	metrics: string[];

	optimizer: Optimizers;
}

export interface IProjectConfig extends IProjectOptimizerConfig, IProjectGlobalConfig {}

export class ProjectConfig implements IProjectConfig {
	batch_size: string;

	epochs: string;

	learning_rate: string;

	loss: string;

	metrics: string[];

	optimizer: Optimizers;

	early_stop: IEarlyStopConfig;

	learning_rate_reduction: ILearningRateReductionConfig;

	constructor(config?: ProjectConfig) {
		this.optimizer = config?.optimizer || Optimizers.Adam;
		this.learning_rate = config?.learning_rate || '0.001';
		this.loss = config?.loss || 'sparse_categorical_crossentropy';
		this.metrics = config?.metrics || ['accuray'];
		this.batch_size = config?.batch_size || '32';
		this.epochs = config?.epochs || '10';
		this.early_stop = config?.early_stop || {
			patience: '2',
			usage: true,
			monitor: Monitor.loss,
		};
		this.learning_rate_reduction = config?.learning_rate_reduction || {
			patience: '2',
			factor: '0.25',
			min_lr: '0.0000003',
			monitor: Monitor.ValAccuracy,
			usage: true,
		};
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
