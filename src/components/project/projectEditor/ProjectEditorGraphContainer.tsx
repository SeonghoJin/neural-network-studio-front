import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { Elements, OnLoadParams } from 'react-flow-renderer';
import { setReactFlowInstance } from '../../../module/ReactFlowInstance';
import ProjectEditorGraph from './projectEditorGraph';
import CircleLoading from '../../utils/Loading/CircularLoading';
import { setElements } from '../../../module/Elements';
import useProject from '../../../hooks/useProject';

const ProjectEditorGraphContainer = () => {
	const result = useProject();
	const dispatch = useDispatch();

	const setReactInstance = useCallback(
		(instance: OnLoadParams) => {
			dispatch(setReactFlowInstance(instance));
		},
		[dispatch]
	);

	const onSetElements = useCallback(
		(elements: Elements) => {
			dispatch(setElements(elements));
		},
		[dispatch]
	);

	const content = result.data && (
		<ProjectEditorGraph
			setReactInstance={setReactInstance}
			flowState={result.data?.content.flowState}
			setElements={onSetElements}
		/>
	);

	return <>{!result.data && !result.error ? <CircleLoading /> : content}</>;
};

export default ProjectEditorGraphContainer;
