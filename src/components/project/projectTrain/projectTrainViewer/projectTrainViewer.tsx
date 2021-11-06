import { createElement, useCallback, useEffect, useRef, useState } from 'react';
import { Divider } from '@material-ui/core';
import styled from 'styled-components';
import { useSnackbar } from 'notistack';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import { Epoch, TrainHistory } from '../types';
import { getTrainHistoryEpochListAPI, useGetTrainHistoryEpochListLibraryAPI, useProjectTrainEpochs } from '../api';
import ProjectTrainLearningCurveViewer from './projectTrainLearningCurveViewer';
import config from '../../../../config';
import { LogViewer } from '../LogViewer';

export type ProjectTrainViewerProps = {
	history: TrainHistory;
	fetchTrainHistory: any;
	setCurrentTrainHistory: any;
};

const GraphViewerWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const GraphViewer = styled.div`
	width: 100%;
	max-width: 600px;
`;

const ProjectTrainViewer = ({ history }: ProjectTrainViewerProps) => {
	const { data: projectTrainEpochs, loading } = useProjectTrainEpochs(history.trainNo);
	const [currentProjectTrainEpochs, setCurrentProjectTrainEpochs] = useState<Array<Epoch> | null>(null);
	const [logs, setLogs] = useState<string[]>(new Array<string>(0));

	useEffect(() => {
		if (!loading) {
			setCurrentProjectTrainEpochs(projectTrainEpochs?.epochs || []);
			if (projectTrainEpochs?.epochs != null) {
				setLogs(
					projectTrainEpochs.epochs.map((epoch) => {
						return `Epoch=${epoch.epochNo} Accuracy=${epoch.acc} Loss=${epoch.loss} Val_accuracy=${epoch.valAcc} Val_loss=${epoch.valLoss} Learning_rate=${epoch.learningRate}`;
					})
				);
			}
		}
	}, [loading, projectTrainEpochs?.epochs]);

	return (
		<>
			<div className="box">
				<div className="tit">학습 곡선</div>
				<GraphViewerWrapper>
					<GraphViewer>
						{(currentProjectTrainEpochs && <ProjectTrainLearningCurveViewer epochs={currentProjectTrainEpochs} />) || (
							<CircleLoading />
						)}
					</GraphViewer>
				</GraphViewerWrapper>
			</div>
			<LogViewer logs={logs} />
		</>
	);
};

export default ProjectTrainViewer;
