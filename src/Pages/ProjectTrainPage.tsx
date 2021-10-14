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
import { useGetTrainHistoryListLibraryAPI } from '../components/project/projectTrain/api';
import { TrainHistory } from '../components/project/projectTrain/types';

const LoadingButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

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
				</div>
			</section>
		</div>
	);
};
