import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { Elements, OnLoadParams } from 'react-flow-renderer';
import { setReactFlowInstance } from '../../../module/ReactFlowInstance';
import ProjectEditorGraph from './projectEditorGraph';
import CircleLoading from '../../utils/Loading/CircularLoading';
import { setElements } from '../../../module/Elements';
import useGetProjectResult from '../../../hooks/APIResult/project/useGetProjectResult';
import { getProjectThunk } from '../../../module/API/project/thunks';
import useProjectLocation from '../../../hooks/useProjectLocation';

const ProjectEditorGraphContainer = () => {
	const result = useGetProjectResult();
	const dispatch = useDispatch();
	const { projectNo } = useProjectLocation();

	useEffect(() => {
		dispatch(getProjectThunk(projectNo));
	}, [dispatch, projectNo]);

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

	return <>{result.loading || result.error ? <CircleLoading /> : content}</>;
};

export default ProjectEditorGraphContainer;
