import styled from 'styled-components';

const LoadingButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

type TrainHistory = {
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
};

type GetTrainHistoryListAPIResponse = {
	trainHistory: TrainHistory[];
};

type GetTrainHistoryListLibraryAPIResultType = {
	loading: boolean;
	data: null | GetTrainHistoryListAPIResponse;
	error: Error | null;
} | null;

export const ProjectTrainPage = () => {};
