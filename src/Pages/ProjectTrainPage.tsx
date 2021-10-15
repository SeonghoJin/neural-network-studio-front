import styled from 'styled-components';

import axios, { AxiosRequestConfig } from 'axios';
import React, { useCallback, useEffect, useState, FC } from 'react';
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
import { numberWithoutSpacesRegExp } from '../components/Input/Validation';
import ProjectConfigViewer from '../components/project/projectConfig/ProjectConfigViewer/ProjectConfigViewer';
import ProjectTrainMain from '../components/project/projectTrain/projectTrainMain';
import { SelectorMappingViewerType } from '../components/project/projectConfig';
import ProjectTrainViewer from '../components/project/projectTrain/projectTrainViewer/projectTrainViewer';

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

/*
예제용 데이터
* */
const exampleData: TrainHistory[] = [
	{
		trainNo: 1,
		acc: 1,
		createTime: 'asd',
		datasetLabel: 'asd',
		datasetNormalizationMethod: 'asd',
		datasetNormalizationUsage: true,
		datasetShuffle: true,
		epochs: 1,
		loss: 1,
		modelConfig: 'asd',
		modelContent: 'asd',
		name: 'asd',
		trainDatasetUrl: 'asd',
		resultUrl: 'asd',
		validDatasetUrl: 'asd',
		valAcc: 1,
		valLoss: 1,
		status: 'asd',
		updateTime: 'asd',
	},
	{
		trainNo: 2,
		acc: 1,
		createTime: 'asd',
		datasetLabel: 'asd',
		datasetNormalizationMethod: 'asd',
		datasetNormalizationUsage: true,
		datasetShuffle: true,
		epochs: 1,
		loss: 1,
		modelConfig: 'asd',
		modelContent: 'asd',
		name: 'asd',
		trainDatasetUrl: 'asd',
		resultUrl: 'asd',
		validDatasetUrl: 'asd',
		valAcc: 1,
		valLoss: 1,
		status: 'asd',
		updateTime: 'asd',
	},
	{
		trainNo: 3,
		acc: 1,
		createTime: 'asd',
		datasetLabel: 'asd',
		datasetNormalizationMethod: 'asd',
		datasetNormalizationUsage: true,
		datasetShuffle: true,
		epochs: 1,
		loss: 1,
		modelConfig: 'asd',
		modelContent: 'asd',
		name: 'asd',
		trainDatasetUrl: 'asd',
		resultUrl: 'asd',
		validDatasetUrl: 'asd',
		valAcc: 1,
		valLoss: 1,
		status: 'asd',
		updateTime: 'asd',
	},
];

export const ProjectTrainPage = () => {
	const { loading, fetch } = useGetTrainHistoryListLibraryAPI();
	const { projectNo } = useProjectLocation();
	// const { trainNo } = useTrainLocation();
	const [trainHistories, setTrainHistories] = useState<TrainHistory[]>([]);
	const [currentTrainNo, setCurrentTrainNo] = useState<null | number>(null);

	useEffect(() => {
		fetch(parseInt(projectNo, 10)).then((res) => {
			setTrainHistories(res.history);
		});

		if (trainHistories.length > 0) {
			setCurrentTrainNo(trainHistories[0].trainNo);
		}
	}, [projectNo, fetch, trainHistories]);

	return (
		<div id="container">
			<ProjectNav currentMenu={2} />
			<section className="modelset">
				<ProjectTrainNav />
				<div className="sec-container">
					<ProjectTrainMain selectorItemHeads={trainHistories} />
				</div>
			</section>
		</div>
	);
};
