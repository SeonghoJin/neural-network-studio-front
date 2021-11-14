import { createElement, MutableRefObject, Ref, useCallback, useEffect, useRef, useState } from 'react';
import { Divider } from '@material-ui/core';
import styled from 'styled-components';
import { useSnackbar } from 'notistack';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import { Epoch, EpochList, TrainHistory } from '../types';
import { useProjectTrainEpochs } from '../api';
import ProjectTrainLearningCurveViewer from './projectTrainLearningCurveViewer';
import config from '../../../../config';
import { LogViewer } from '../LogViewer';
import { useTrainLogs } from '../../../../hooks/useTrainLogs';

export type ProjectTrainViewerProps = {
	history: TrainHistory;
	fetchTrainHistory: any;
	setCurrentTrainHistory: any;
	socket: MutableRefObject<WebSocket | null>;
	trainMessage: string[];
	setTrainMessage: any;
	epochs: Epoch[] | null;
	setEpochs: any;
};

const GraphViewerWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const GraphViewer = styled.div`
	width: 100%;
	max-width: 1024px;
`;

const ProjectTrainViewerTrainState = ({
	history,
	fetchTrainHistory,
	setCurrentTrainHistory,
	socket,
	setTrainMessage,
	trainMessage,
	epochs,
	setEpochs,
}: ProjectTrainViewerProps) => {
	const { projectNo } = useProjectLocation();
	const { data: projectTrainEpochs, loading, mutate } = useProjectTrainEpochs(history.trainNo);
	const { enqueueSnackbar } = useSnackbar();
	const { data: trainLogs, loading: trainLogsLoading } = useTrainLogs({
		trainNo: history.trainNo.toString(),
		projectNo,
	});

	const makeLog = useCallback((epoch) => {
		return `Epoch=${epoch.epochNo} Accuracy=${epoch.acc} Loss=${epoch.loss} Val_accuracy=${epoch.valAcc} Val_loss=${epoch.valLoss} Learning_rate=${epoch.learningRate}`;
	}, []);

	useEffect(() => {
		if (!loading && !trainLogsLoading) {
			if (trainMessage.length === 0) {
				setTrainMessage(
					(trainLogs?.trainLogs || []).map((trainLog) => {
						return `${new Date(trainLog.create_time)} ${trainLog.msg}`;
					})
				);
			}
			if (epochs == null) {
				setEpochs(projectTrainEpochs?.epochs || []);
			}
		}
	}, [
		epochs,
		loading,
		makeLog,
		projectTrainEpochs?.epochs,
		setEpochs,
		setTrainMessage,
		trainLogs?.trainLogs,
		trainLogsLoading,
		trainMessage.length,
	]);

	const addEpochs = useCallback(
		(_epoch: Epoch) => {
			setEpochs((prev: Epoch[]) => {
				if (prev === null) return null;
				return prev.concat(_epoch);
			});
		},
		[setEpochs]
	);

	useEffect(() => {
		if (socket.current === null && epochs !== null) {
			const _socket = new WebSocket(`${config.SOCKET_SERVER_PREFIX}/ws/project/${projectNo}/train/${history.trainNo}`);
			_socket.onclose = () => {
				setTrainMessage((prev: string) => prev.concat('학습 종료'));
			};
			_socket.onmessage = (msg) => {
				const data = JSON.parse(msg.data);
				const epoch = data.Epoch;
				if (epoch != null) {
					const formattedEpoch = {
						epochNo: epoch.epoch,
						loss: epoch.loss,
						acc: epoch.accuracy,
						valAcc: epoch.val_accuracy,
						learningRate: 0,
						valLoss: epoch.val_loss,
					};
					if (epoch.train_id !== 0) {
						addEpochs(formattedEpoch);
						setTrainMessage((prev: string) =>
							prev.concat(`${new Date(data.TrainLog.create_time)} ${data.TrainLog.msg}`)
						);
					}
				}
			};
			// eslint-disable-next-line no-param-reassign
			socket.current = _socket;
		}
	}, [
		addEpochs,
		enqueueSnackbar,
		epochs,
		fetchTrainHistory,
		history,
		makeLog,
		mutate,
		projectNo,
		setCurrentTrainHistory,
		setTrainMessage,
		socket,
	]);

	return (
		<>
			<div className="box">
				<div className="tit">학습 곡선</div>
				<GraphViewerWrapper>
					<GraphViewer>
						{(epochs && <ProjectTrainLearningCurveViewer epochs={epochs} />) || <CircleLoading />}
					</GraphViewer>
				</GraphViewerWrapper>
			</div>
			<LogViewer logs={trainMessage} />
		</>
	);
};

export default ProjectTrainViewerTrainState;
