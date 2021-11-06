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

const ProjectTrainViewer = ({ history, fetchTrainHistory, setCurrentTrainHistory }: ProjectTrainViewerProps) => {
	const { projectNo } = useProjectLocation();
	const { data: projectTrainEpochs, loading, mutate } = useProjectTrainEpochs(history.trainNo);
	const socket = useRef<WebSocket | null>(null);
	const [currentProjectTrainEpochs, setCurrentProjectTrainEpochs] = useState<Array<Epoch> | null>(null);
	const { enqueueSnackbar } = useSnackbar();
	const [logs, setLogs] = useState<string[]>(new Array<string>(0));

	useEffect(() => {
		setCurrentProjectTrainEpochs(null);
		setLogs([]);
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
				setLogs((prev) => prev.concat('학습중..'));
				enqueueSnackbar('학습이 진행되고 있습니다.', { variant: 'success' });
			};
			_socket.onerror = () => {
				setLogs((prev) => prev.concat('학습 실패'));
				enqueueSnackbar('학습이 실패했습니다.', { variant: 'error' });
			};
			_socket.onclose = () => {
				setLogs((prev) => prev.concat('학습 종료'));
			};
			_socket.onmessage = (msg) => {
				const data = JSON.parse(msg.data);
				const epoch = data.Epoch;
				const { TrainLog } = data;
				if (epoch != null) {
					addEpochs({
						epochNo: epoch.epoch,
						loss: epoch.loss,
						acc: epoch.accuracy,
						valAcc: epoch.val_accuracy,
						learningRate: 0,
						valLoss: epoch.val_loss,
					});
					setLogs((prev) => prev.concat(TrainLog?.msg));
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
		logs,
		mutate,
		projectNo,
		setCurrentTrainHistory,
	]);

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
			<div
				style={{
					color: 'white',
					backgroundColor: 'black',
					width: '100%',
					flex: '1',
					padding: '20px 20px 0px 20px',
					overflow: 'auto',
					fontSize: '15px',
					boxSizing: 'border-box',
				}}
			>
				<LogViewer logs={logs} />
			</div>
		</>
	);
};

export default ProjectTrainViewer;
