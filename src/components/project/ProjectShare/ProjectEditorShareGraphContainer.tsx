import { useCallback, useEffect } from 'react';
import { Elements, OnLoadParams } from 'react-flow-renderer';
import { useDispatch } from 'react-redux';
import { useRecoilState } from 'recoil';
import useSocket, { socketProjectResultState } from '../../../hooks/useSocket';
import { setReactFlowInstance } from '../../../module/ReactFlowInstance';
import { setElements } from '../../../module/Elements';
import ProjectEditorGraph from '../projectEditor/projectEditorGraph';
import { CircleLoading } from '../../utils/Loading/CircularLoading';

const ProjectEditorShareGraphContainer = () => {
	const { project, disconnect, connected, login } = useSocket();
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

	const content = project && (
		<ProjectEditorGraph
			setReactInstance={setReactInstance}
			flowState={project.content.flowState}
			setElements={onSetElements}
		/>
	);

	useEffect(() => {
		if (connected) {
			login();
		}
	}, [connected, disconnect, login]);

	useEffect(() => {
		return () => {
			disconnect();
		};
	}, [disconnect]);

	return <>{!project ? <CircleLoading /> : content}</>;
};

export default ProjectEditorShareGraphContainer;
