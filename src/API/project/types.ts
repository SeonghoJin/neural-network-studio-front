// eslint-disable-next-line max-classes-per-file
import { FlowExportObject } from 'react-flow-nns';
import Monitor from '../../core/Project/Montior';
import Optimizers from '../../core/Project/Optimizers';
import { BlockState } from '../../core/reactFlow/block';

export interface IProjectDto {
	config: ProjectConfigDto;
	content: IProjectContentDto;
	description: string;
	lastModify: Date;
	name: string;
	projectNo: string;
}

export interface IProjectContentDto {
	flowState: FlowExportObject<BlockState>;
	output: string;
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

export interface ProjectConfigDto {
	optimizer_name: Optimizers;
	optimizer_config: OptimizerConfigDto;
	loss: string;
	metrics: Array<string>;
	batch_size: number;
	epochs: number;
	early_stop: EarlyStopConfigDto;
	learning_rate_reduction: LearningRateReductionConfigDto;
}

export interface OptimizerConfigDto {
	decay: number;
	learning_rate: number;
	beta_1: number;
	beta_2: number;
	epsilon: number;
	amsgrad: boolean;
	weight_decay: number;
	initial_accumulator_value: number;
	momentum: number;
	centered: boolean;
	nesterov: boolean;
}

export interface EarlyStopConfigDto {
	usage: boolean;
	monitor: Monitor;
	patience: number;
}

export interface LearningRateReductionConfigDto {
	usage: boolean;
	monitor: Monitor;
	patience: number;
	factor: number;
	min_lr: number;
}

export class LearningRateReductionConfig {
	usage: boolean;

	monitor: Monitor;

	patience: string;

	factor: string;

	min_lr: string;

	constructor(dto: LearningRateReductionConfigDto) {
		this.monitor = dto?.monitor || Monitor.ValAccuracy;
		this.patience = dto?.patience?.toString() || '0.01';
		this.factor = dto?.factor.toString() || '0.01';
		this.min_lr = dto?.min_lr.toString() || '0.01';
		this.usage = dto?.usage || true;
	}

	static toLearningRateReductionConfigDto(learningRateReduction: LearningRateReductionConfig) {
		const learningRateReductionConfig: LearningRateReductionConfigDto = {
			monitor: learningRateReduction.monitor,
			patience: Number(learningRateReduction.patience),
			factor: Number(learningRateReduction.factor),
			min_lr: Number(learningRateReduction.min_lr),
			usage: learningRateReduction.usage,
		};

		return learningRateReductionConfig;
	}
}

export class EarlyStopConfig {
	usage: boolean;

	monitor: Monitor;

	patience: string;

	constructor(dto: EarlyStopConfigDto) {
		this.usage = dto?.usage || true;
		this.monitor = dto?.monitor || Monitor.ValAccuracy;
		this.patience = dto?.patience.toString() || '0.01';
	}

	static toEarlyStopConfig(earlyStopConfig: EarlyStopConfig) {
		const earlyStopConfigDto: EarlyStopConfigDto = {
			usage: earlyStopConfig.usage,
			monitor: earlyStopConfig.monitor,
			patience: Number(earlyStopConfig.patience),
		};

		return earlyStopConfigDto;
	}
}

export class OptimizerConfig {
	learning_rate: string;

	weight_decay: string;

	initial_accumulator_value: string;

	momentum: string;

	centered: boolean;

	nesterov: boolean;

	beta_1: string;

	beta_2: string;

	epsilon: string;

	amsgrad: boolean;

	decay: string;

	constructor(dto: OptimizerConfigDto) {
		this.learning_rate = dto?.learning_rate?.toString() || '0.001';
		this.beta_1 = dto?.beta_1?.toString() || '1';
		this.beta_2 = dto?.beta_2?.toString() || '1';
		this.epsilon = dto?.epsilon?.toString() || '1';
		this.amsgrad = dto?.amsgrad || false;
		this.momentum = dto?.momentum?.toString() || '1';
		this.weight_decay = dto?.weight_decay?.toString() || '1';
		this.initial_accumulator_value = dto?.initial_accumulator_value?.toString() || '1';
		this.centered = dto?.centered || false;
		this.nesterov = dto?.nesterov || false;
		this.decay = dto?.decay?.toString() || '1';
	}

	static toOptimizerConfigDto(optimizerConfig: OptimizerConfig) {
		const optimizerConfigDto: OptimizerConfigDto = {
			decay: Number(optimizerConfig.decay),
			centered: optimizerConfig.centered,
			initial_accumulator_value: Number(optimizerConfig.initial_accumulator_value),
			momentum: Number(optimizerConfig.momentum),
			nesterov: optimizerConfig.nesterov,
			weight_decay: Number(optimizerConfig.weight_decay),
			learning_rate: Number(optimizerConfig.learning_rate),
			beta_2: Number(optimizerConfig.beta_2),
			beta_1: Number(optimizerConfig.beta_1),
			epsilon: Number(optimizerConfig.epsilon),
			amsgrad: optimizerConfig.amsgrad,
		};

		return optimizerConfigDto;
	}
}

export class ProjectConfig {
	optimizer_name: Optimizers;

	optimizer_config: OptimizerConfig;

	loss: string;

	metrics: Array<string>;

	batch_size: string;

	epochs: string;

	early_stop: EarlyStopConfig;

	learning_rate_reduction: LearningRateReductionConfig;

	constructor(dto: ProjectConfigDto) {
		this.optimizer_name = dto.optimizer_name || Optimizers.Adam;
		this.optimizer_config = new OptimizerConfig(dto?.optimizer_config || {});
		this.loss = dto.loss;
		this.metrics = dto.metrics;
		this.batch_size = dto.batch_size.toString();
		this.epochs = dto.epochs.toString();
		this.early_stop = new EarlyStopConfig(dto.early_stop);
		this.learning_rate_reduction = new LearningRateReductionConfig(dto.learning_rate_reduction);
	}

	static toProjectConfigDto(projectConfig: ProjectConfig) {
		const projectConfigDto: ProjectConfigDto = {
			optimizer_name: projectConfig.optimizer_name,
			optimizer_config: OptimizerConfig.toOptimizerConfigDto(projectConfig.optimizer_config),
			loss: projectConfig.loss,
			metrics: projectConfig.metrics,
			batch_size: Number(projectConfig.batch_size),
			epochs: Number(projectConfig.epochs),
			early_stop: EarlyStopConfig.toEarlyStopConfig(projectConfig.early_stop),
			learning_rate_reduction: LearningRateReductionConfig.toLearningRateReductionConfigDto(
				projectConfig.learning_rate_reduction
			),
		};
		return projectConfigDto;
	}
}
