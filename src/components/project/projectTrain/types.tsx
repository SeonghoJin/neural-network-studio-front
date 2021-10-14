import { ChangeEvent } from "react";

export interface ProjectTrainHistoryDto {
	trainNo: number;
	name: string;
	status: string;
	acc: number;
	loss: number;
	valAcc: number;
	valLoss: number;
	epochs: number;
	resultUrl: string;
	trainDatasetUrl: string;
	validDatasetUrl: string;
	datasetShuffle: boolean;
	datasetLabel: string;
	datasetNormalizationUsage: boolean;
	datasetNormalizationMethod: string;
	modelContent: any;
	modelConfig: any;
	createTime: string;
	updateTime: string;
}

export class TrainHistory {
	trainNo: number;

	name: string;

	status: string;

	acc: number;

	loss: number;

	valAcc: number;

	valLoss: number;

	epochs: number;

	resultUrl: string;

	trainDatasetUrl: string;

	validDatasetUrl: string;

	datasetShuffle: boolean;

	datasetLabel: string;

	datasetNormalizationUsage: boolean;

	datasetNormalizationMethod: string;

	modelContent: any;

	modelConfig: any;

	createTime: string;

	updateTime: string;

	constructor(dto: ProjectTrainHistoryDto) {
		this.trainNo = dto.trainNo;
		this.name = dto.name;
		this.status = dto.status;
		this.acc = dto.acc;
		this.loss = dto.loss;
		this.valAcc = dto.valAcc;
		this.valLoss = dto.valLoss;
		this.epochs = dto.epochs;
		this.resultUrl = dto.resultUrl;
		this.trainDatasetUrl = dto.trainDatasetUrl;
		this.validDatasetUrl = dto.validDatasetUrl;
		this.datasetShuffle = dto.datasetShuffle;
		this.datasetLabel = dto.datasetLabel;
		this.datasetNormalizationUsage = dto.datasetNormalizationUsage;
		this.datasetNormalizationMethod = dto.datasetNormalizationMethod;
		this.modelContent = dto.modelContent;
		this.modelConfig = dto.modelConfig;
		this.createTime = dto.createTime;
		this.updateTime = dto.updateTime;
	}
}

export type GetTrainHistoryListAPIResponse = {
	history: TrainHistory[];
};

export type Epoch = {
	epochNo: number;
	acc: number;
	loss: number;
	valAcc: number;
	valLoss: number;
	learningRate: number;
};

export type EpochList = {
	epochs: Array<Epoch>;
};

export type GetTrainHistoryEpochListAPIResponse = {
	epochs: Array<Epoch>;
};

export type GetTrainHistoryEpochListLibraryAPIResultType = {
	loading: boolean;
	data: null | GetTrainHistoryEpochListAPIResponse;
	error: Error | null;
} | null;

export type TrainEpochsProps = {
	TrainEpochs: EpochList;
}