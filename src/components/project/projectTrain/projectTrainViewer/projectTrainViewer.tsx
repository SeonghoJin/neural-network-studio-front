import { createElement, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';
import { Epoch, TrainHistory } from '../types';
import { useProjectTrainEpochs } from '../api';
import ProjectTrainLearningCurveViewer from './projectTrainLearningCurveViewer';
import { LogViewer } from '../LogViewer';
import { useTrainLogs } from '../../../../hooks/useTrainLogs';
import useProjectLocation from '../../../../hooks/useProjectLocation';

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
	max-width: 960px;
`;

const ProjectTrainViewer = ({ history }: ProjectTrainViewerProps) => {
	const { data: projectTrainEpochs, loading } = useProjectTrainEpochs(history.trainNo);
	const [currentProjectTrainEpochs, setCurrentProjectTrainEpochs] = useState<Array<Epoch> | null>(null);
	const [logs, setLogs] = useState<string[]>(new Array<string>(0));
	const { projectNo } = useProjectLocation();
	const { data: trainLogs } = useTrainLogs({ trainNo: history.trainNo.toString(), projectNo });

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
			<LogViewer
				logs={
					trainLogs?.trainLogs?.map((trainLog) => {
						return trainLog.msg;
					}) || []
				}
			/>
		</>
	);
};

export default ProjectTrainViewer;
