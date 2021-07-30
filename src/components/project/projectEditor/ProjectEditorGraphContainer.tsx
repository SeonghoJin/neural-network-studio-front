import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { Elements, OnLoadParams } from 'react-flow-renderer';
import { setReactFlowInstance } from '../../../module/ReactFlowInstance';
import ProjectEditorGraph from './projectEditorGraph';
import CircleLoading from '../../Loading/CircularLoading';
import { setElements } from '../../../module/Elements';
import useGetProjectResult from '../../../hooks/APIResult/useGetProjectResult';
import { getProjectThunk } from '../../../module/API/project/thunks';
import useProjectLocation from '../../../hooks/useProjectLocation';

const ProjectEditorGraphContainer = () => {
	const result = useGetProjectResult();
	const dispatch = useDispatch();
	const { projectNo } = useProjectLocation();

	useEffect(() => {
		dispatch(getProjectThunk(projectNo));
	}, [projectNo]);

	const setReactInstance = useCallback((instance: OnLoadParams) => {
		dispatch(setReactFlowInstance(instance));
	}, []);

	const onSetElements = useCallback((elements: Elements) => {
		dispatch(setElements(elements));
	}, []);

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
