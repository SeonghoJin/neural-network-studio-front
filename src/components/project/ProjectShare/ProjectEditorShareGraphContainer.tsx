import { useCallback, useEffect } from 'react';
import { Elements, OnLoadParams } from 'react-flow-renderer';
import { useDispatch } from 'react-redux';
import useSocket from '../../../hooks/useSocket';
import { setReactFlowInstance } from '../../../module/ReactFlowInstance';
import { setElementByIdAndUpdatePosition, setElements } from '../../../module/Elements';
import ProjectEditorGraph from '../projectEditor/projectEditorGraph';
import { CircleLoading } from '../../utils/Loading/CircularLoading';
import useAuthentication from '../../../hooks/useAuthentication';
import Cursors from './Cursors';
import { MoveBlockBaseData } from '../../../core/Project/share/SocketEvent';

const ProjectEditorShareGraphContainer = () => {
	const { project, disconnect, connected, login, onMoveCursor, onMoveBlock, moveBlock } = useSocket();
	const { user } = useAuthentication();
	const cursors = Cursors({ ownerName: user?.profile?.name as string });
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

	const updatePosition = useCallback(
		(data: MoveBlockBaseData) => {
			dispatch(setElementByIdAndUpdatePosition(data));
		},
		[dispatch]
	);

	const content = project && (
		<ProjectEditorGraph
			setReactInstance={setReactInstance}
			flowState={project.content.flowState}
			setElements={onSetElements}
			onMoveCursor={onMoveCursor}
			onMoveBlock={onMoveBlock}
			cursorModule={cursors}
			moveBlock={moveBlock}
			updatePosition={updatePosition}
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
