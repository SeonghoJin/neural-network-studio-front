import { createElement } from 'react';
import { atom, useRecoilState } from 'recoil';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import { TrainHistory } from '../types';

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

const useProjecTrain = () => {
	const { projectNo } = useProjectLocation();
};

export type ProjectTrainViewerProps = {
	index: any;
	selectorMappingViewer: any;
};

const ProjectTrainViewer = ({ index, selectorMappingViewer }: ProjectTrainViewerProps) => {
	// const { projectTrain, loading } = useProjectTrain();
	if (!(index in selectorMappingViewer)) {
		throw new Error('허용되지 않는 행위입니다.');
	}
	return (
		<>
			nothing
		</>
	);
};

export default ProjectTrainViewer;
