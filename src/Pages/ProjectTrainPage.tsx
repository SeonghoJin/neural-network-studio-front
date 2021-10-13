import styled from 'styled-components';

import axios, { AxiosRequestConfig } from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { LoadingButton } from '@mui/lab';
import { Link, useRouteMatch } from 'react-router-dom';
import { format } from 'util';
import config from '../config';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import { LeftWrapper } from '../components/project/projectConfig/projectConfigMain';
import { sleep } from '../util';
import useProjectList from '../hooks/useProjectList';
import useProjectLocation from '../hooks/useProjectLocation';
import icoPlay1 from '../static/img/ico_play1.png';
import { DynamicPath } from '../components/PagePathConsts';
import ProjectTrainNav from '../components/project/projectTrain/projectTrainNav/projectTrainNav';
import ProjectTrainLearningCurveViewer from '../components/project/projectTrain/projectTrainViewer/projectTrainLearningCurveViewer';

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
	history: TrainHistory[];
};

const axiosConfig: AxiosRequestConfig = {
	withCredentials: true,
};

const getTrainHistoryListLibraryAPIResult = atom<GetTrainHistoryListLibraryAPIResultType>({
	key: 'getTrainHistoryListLibraryAPIResult',
	default: null,
});

export const getTrainHistoryListAPI = async (projectNo: number) => {
	try {
		const uri = `${config.SERVER_PREFIX}/api/project/${projectNo}/train`;
		const response = await axios.get(uri, axiosConfig);
		return response.data;
	} catch (e) {
		throw new Error('TrainHistoryList를 가져오지 못했습니다. 다시 시도해주세요.');
	}
};

export const getTrainHistoryEpochListAPI = async (projectNo: number, trainNo: number) => {
	try {
		const uri = `${config.SERVER_PREFIX}/api/project/${projectNo}/train/${trainNo}`;
		const response = await axios.get(uri, axiosConfig);
		return response.data;
	} catch (e) {
		throw new Error('TrainHistoryEpochList를 가져오지 못했습니다. 다시 시도해주세요.');
	}
};

export const useGetTrainHistoryListLibraryAPI = () => {
	const [result, setResult] = useRecoilState<GetTrainHistoryListLibraryAPIResultType>(
		getTrainHistoryListLibraryAPIResult
	);

	const fetch = useCallback(
		async (projectNo: number) => {
			setResult({
				loading: true,
				data: null,
				error: null,
			});

			const delayedData = await sleep(300)
				.then(async () => {
					const data = await getTrainHistoryListAPI(projectNo);
					setResult({
						loading: false,
						data,
						error: null,
					});
					return data;
				})
				.catch((e) => {
					setResult({
						loading: false,
						data: null,
						error: e,
					});
					throw new Error(e);
				});

			return delayedData;
		},
		[setResult]
	);

	return {
		fetch,
		...result,
	};
};

type GetTrainHistoryListLibraryAPIResultType = {
	loading: boolean;
	data: null | GetTrainHistoryListAPIResponse;
	error: Error | null;
} | null;

export const ListComponent = () => {
	const [isActive, setActive] = useState(false);

	const onDepthClick = () => {
		setActive(!isActive);
	};
};

const useTrainLocation = () => {
	const match = useRouteMatch<{ trainNo: string }>();
	return { trainNo: match.params.trainNo };
};

export const ProjectTrainPage = () => {
	const { loading, fetch } = useGetTrainHistoryListLibraryAPI();
	const { projectNo } = useProjectLocation();
	const { trainNo } = useTrainLocation();
	const [trainHistories, setTrainHistories] = useState<TrainHistory[]>(new Array<TrainHistory>(0));

	useEffect(() => {
		fetch(parseInt(projectNo, 10)).then((res) => {
			setTrainHistories(res.history);
		});
	}, [projectNo, fetch]);

	return (
		<div id="container">
			<ProjectNav />
			<section className="modelset">
				<ProjectTrainNav />
				<div className="sec-container">
					<LeftWrapper>
						<div className="sec-l">
							<ol className="sec-menu">
								{trainHistories.map((trainHistory) => {
									return (
										<li key={trainHistory.trainNo}>
											<Link
												to={format(DynamicPath.PROJECT_TRAIN_DETAIL_FORMAT, projectNo, trainHistory.trainNo)}
												className="tit js-depth"
											>
												{trainHistory.name}
											</Link>
											<div className="depth">
												<div>
													<p>
														<strong>Epoch</strong> : {trainHistory.epochs}
													</p>
												</div>
												<div>
													<p>
														<strong>학습 정확도</strong> : {trainHistory.acc}
													</p>
												</div>
												<div>
													<p>
														<strong>학습 손실</strong> : {trainHistory.loss}
													</p>
												</div>
												<div>
													<p>
														<strong>검증 정확도</strong> : {trainHistory.valAcc}
													</p>
												</div>
												<div>
													<p>
														<strong>검증 손실</strong> : {trainHistory.valLoss}
													</p>
												</div>
											</div>
										</li>
									);
								})}
							</ol>
						</div>
					</LeftWrapper>
					<div className="sec-c">
						<ProjectTrainLearningCurveViewer epochs={1} />
					</div>
				</div>
			</section>
		</div>
	);
};
