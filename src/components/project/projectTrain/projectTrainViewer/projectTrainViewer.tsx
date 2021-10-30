import { createElement, useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import { TrainHistory } from '../types';
import { getTrainHistoryEpochListAPI, useGetTrainHistoryEpochListLibraryAPI, useProjectTrainEpochs } from '../api';
import ProjectTrainLearningCurveViewer from './projectTrainLearningCurveViewer';

export class ProjectTrainHistories {
	trainHistories: Array<TrainHistory>;

	constructor(trainHistories: Array<TrainHistory>) {
		this.trainHistories = trainHistories;
	}
}

export type ProjectTrainState = ProjectTrainHistories | null;

const projectTrainState = atom<ProjectTrainState>({
	key: 'ProjectTrainState',
	default: null,
});

export type ProjectTrainViewerProps = {
	history: TrainHistory;
};

const ProjectTrainViewer = ({ history }: ProjectTrainViewerProps) => {
	const { projectNo } = useProjectLocation();
	const { projectTrainEpochs, setProjectTrainEpochs, loading } = useProjectTrainEpochs(history.trainNo);
	const { fetch } = useGetTrainHistoryEpochListLibraryAPI();

	useEffect(() => {
		fetch(parseInt(projectNo, 10), history.trainNo).then((res) => {
			setProjectTrainEpochs(res);
		});
	}, [setProjectTrainEpochs, fetch, projectNo, history]);

	if (history.status === 'TRAIN') {
		// Connect socket.
	}

	return (
		<div className="box">
			<div className="tit">Learning Curve</div>
			{loading && <CircleLoading />}
			{projectTrainEpochs?.epochs && <ProjectTrainLearningCurveViewer epochs={projectTrainEpochs.epochs} />}
		</div>
	);
};

export default ProjectTrainViewer;
