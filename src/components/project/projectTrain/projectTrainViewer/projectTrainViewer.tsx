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
	max-width: 800px;
`;

const ProjectTrainViewer = ({ history, fetchTrainHistory, setCurrentTrainHistory }: ProjectTrainViewerProps) => {
	const { projectNo } = useProjectLocation();
	const { data: projectTrainEpochs, loading, mutate } = useProjectTrainEpochs(history.trainNo);
	const socket = useRef<WebSocket | null>(null);
	const [currentProjectTrainEpochs, setCurrentProjectTrainEpochs] = useState<Array<Epoch> | null>(null);
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		setCurrentProjectTrainEpochs(null);
		if (history.status !== 'TRAIN') {
			socket.current?.close();
			socket.current = null;
		}
	}, [history.status, projectTrainEpochs]);

	useEffect(() => {
		if (currentProjectTrainEpochs == null && !loading) {
			if (projectTrainEpochs?.epochs != null) {
				setCurrentProjectTrainEpochs(projectTrainEpochs.epochs);
			} else {
				setCurrentProjectTrainEpochs([]);
			}
		}
	}, [currentProjectTrainEpochs, loading, projectTrainEpochs?.epochs]);

	const addEpochs = useCallback((epoch: Epoch) => {
		setCurrentProjectTrainEpochs((prev) => {
			if (prev === null) return null;
			return prev.concat(epoch);
		});
	}, []);

	useEffect(() => {
		if (socket.current === null && history.status === 'TRAIN' && currentProjectTrainEpochs !== null) {
			const _socket = new WebSocket(`${config.SOCKET_SERVER_PREFIX}/ws/project/${projectNo}/train/${history.trainNo}`);
			_socket.onopen = () => {
				enqueueSnackbar('학습이 진행되고 있습니다.', { variant: 'success' });
			};
			_socket.onerror = () => {
				enqueueSnackbar('학습이 실패했습니다.', { variant: 'error' });
			};
			_socket.onmessage = (msg) => {
				const epoch = JSON.parse(msg.data)?.Epoch;
				if (epoch != null) {
					addEpochs({
						epochNo: epoch.epoch,
						loss: epoch.loss,
						acc: epoch.accuracy,
						valAcc: epoch.val_accuracy,
						learningRate: 0,
						valLoss: epoch.val_loss,
					});
				}
			};
			socket.current = _socket;
		}
	}, [
		addEpochs,
		currentProjectTrainEpochs,
		enqueueSnackbar,
		fetchTrainHistory,
		history,
		mutate,
		projectNo,
		setCurrentTrainHistory,
	]);

	return (
		<>
			<div className="box">
				<div className="tit">Learning Curve</div>
				<GraphViewerWrapper>
					<GraphViewer>
						{(currentProjectTrainEpochs && <ProjectTrainLearningCurveViewer epochs={currentProjectTrainEpochs} />) || (
							<CircleLoading />
						)}
					</GraphViewer>
				</GraphViewerWrapper>
			</div>
		</>
	);
};

export default ProjectTrainViewer;
