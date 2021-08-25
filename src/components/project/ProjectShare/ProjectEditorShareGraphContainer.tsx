import { useCallback, useEffect } from 'react';
import { Elements, FlowExportObject, OnLoadParams } from 'react-flow-renderer';
import { useDispatch } from 'react-redux';
import { setReactFlowInstance } from '../../../module/ReactFlowInstance';
import { setElements } from '../../../module/Elements';
import ProjectEditorGraph from '../projectEditor/projectEditorGraph';
import useAuthentication from '../../../hooks/useAuthentication';
import { useSocket } from '../../../core/Socket/hooks/useSocket';
import { CursorMoveDto } from '../../../core/Socket/dto/cursor.move.dto';
import { XYPosition } from '../../../core/Socket/entities/types';
import Cursors from './Cursors';

const ProjectEditorShareGraphContainer = () => {
	const { socketService } = useSocket();
	const { user } = useAuthentication();
	const cursors = Cursors();
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

	// const updatePosition = useCallback(
	// 	(data: MoveBlockBaseData) => {
	// 		dispatch(setElementByIdAndUpdatePosition(data));
	// 	},
	// 	[dispatch]
	// );
	//
	// const addRemoteElement = useCallback(
	// 	(data: CreateElementBaseData) => {
	// 		dispatch(addElement(data.element));
	// 	},
	// 	[dispatch]
	// );
	//
	// const addRemoteEdge = useCallback(
	// 	(data: CreateEdgeBaseData) => {
	// 		dispatch(addEdge(data.edge));
	// 	},
	// 	[dispatch]
	// );
	//
	// const removeRemoteElement = useCallback(
	// 	(data: RemoveElementBaseData) => {
	// 		dispatch(removeElements(data.elements));
	// 	},
	// 	[dispatch]
	// );

	const content = (
		<ProjectEditorGraph
			setReactInstance={setReactInstance}
			flowState={{} as FlowExportObject}
			setElements={onSetElements}
			onMoveCursor={(position: XYPosition) => {
				const dto = new CursorMoveDto();
				dto.cursor = {
					position,
					user: {
						name: user?.profile?.name,
						color: '#FFFFFF',
					},
				};
				socketService?.moveCursor(dto);
			}}
			// onMoveCursor={onMoveCursor}
			// onMoveBlock={onMoveBlock}
			cursorModule={cursors}
			// moveBlock={moveBlock}
			// createdBlock={createBlock}
			// removedBlock={removeBlock}
			// updatePosition={updatePosition}
			// createdRemoteEdge={createdRemoteEdge}
			// onCreateElement={onCreateElement}
			// onRemoveElement={onRemoveElement}
			// onCreateEdge={onCreateEdge}
			// addRemoteElement={addRemoteElement}
			// addRemoteEdge={addRemoteEdge}
			// removeRemoteElement={removeRemoteElement}
		/>
	);

	// useEffect(() => {
	// 	if (connected) {
	// 		login();
	// 	}
	// }, [connected, disconnect, login]);
	//
	// useEffect(() => {
	// 	return () => {
	// 		disconnect();
	// 	};
	// }, [disconnect]);

	return <>{content}</>;
};

export default ProjectEditorShareGraphContainer;
