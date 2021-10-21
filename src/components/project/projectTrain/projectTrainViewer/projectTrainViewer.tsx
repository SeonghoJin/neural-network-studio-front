import { createElement, useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import { TrainHistory } from '../types';
import { useProjectTrainEpochs } from '../api';
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
	// const { projectTrain, loading } = useProjectTrain();
	const { projectTrainEpochs, setProjectTrainEpochs, loading } = useProjectTrainEpochs(history.trainNo);

	if (history.status === 'TRAIN') {
		// Connect socket.
	}

	return (
		<>
			{loading && <CircleLoading />}
			{projectTrainEpochs && <ProjectTrainLearningCurveViewer epochs={projectTrainEpochs.epochs} />}
		</>
	);
};

export default ProjectTrainViewer;
