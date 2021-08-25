import { useCallback, useEffect } from 'react';
import { Connection, Edge, Elements, FlowExportObject, isEdge, OnLoadParams, Node } from 'react-flow-renderer';
import { useDispatch } from 'react-redux';
import { setReactFlowInstance } from '../../../module/ReactFlowInstance';
import { setElements } from '../../../module/Elements';
import ProjectEditorGraph from '../projectEditor/projectEditorGraph';
import useAuthentication from '../../../hooks/useAuthentication';
import { useSocket } from '../../../core/Socket/hooks/useSocket';
import { CursorMoveDto } from '../../../core/Socket/dto/cursor.move.dto';
import { XYPosition } from '../../../core/Socket/entities/types';
import Cursors from './Cursors';
import { useRemoteCursorMove } from '../../../core/Socket/hooks/useRemoteCursorMove';
import { useRemoteEdgeCreate } from '../../../core/Socket/hooks/useRemoteEdgeCreate';
import { useRemoteEdgeRemove } from '../../../core/Socket/hooks/useRemoteEdgeRemove';
import { useRemoteBlockChange } from '../../../core/Socket/hooks/useRemoteBlockChange';
import { useRemoteBlockRemove } from '../../../core/Socket/hooks/useRemoteBlockRemove';
import { useRemoteBlockCreate } from '../../../core/Socket/hooks/useRemoteBlockCreate';
import { useRemoteBlockMove } from '../../../core/Socket/hooks/useRemoteBlockMove';
import { useUserList } from '../../../core/Socket/hooks/useUserListResponse';
import { useCreateUserResponse } from '../../../core/Socket/hooks/useCreateUserResponse';
import { User } from '../../../core/Socket/entities/User';
import { EdgeCreateDto } from '../../../core/Socket/dto/edge.create.dto';
import { BlockRemoveDto } from '../../../core/Socket/dto/block.remove.dto';
import { EdgeRemoveDto } from '../../../core/Socket/dto/edge.remove.dto';
import { BlockMoveDto } from '../../../core/Socket/dto/block.move.dto';
import { BlockCreateDto } from '../../../core/Socket/dto/block.create.dto';
import { BlockState } from '../../../core/reactFlow/block';

const ProjectEditorShareGraphContainer = () => {
	const { socketService } = useSocket();
	const { remoteCursorMove } = useRemoteCursorMove();
	const { remoteEdgeCreate } = useRemoteEdgeCreate();
	const { remoteEdgeRemove } = useRemoteEdgeRemove();
	const { remoteBlockChange } = useRemoteBlockChange();
	const { remoteBlockRemove } = useRemoteBlockRemove();
	const { remoteBlockCreate } = useRemoteBlockCreate();
	const { remoteBlockMove } = useRemoteBlockMove();
	const { createdUserResponse } = useCreateUserResponse();
	const dispatch = useDispatch();
	const cursors = Cursors();

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

	const onMoveCursor = useCallback(
		(position: XYPosition) => {
			const dto = new CursorMoveDto();
			dto.cursor = {
				position,
				user: createdUserResponse?.user as User,
			};
			socketService?.moveCursor(dto);
		},
		[createdUserResponse?.user, socketService]
	);

	const onCreateEdge = useCallback(
		(edge: Edge) => {
			const dto = new EdgeCreateDto();
			dto.edge = edge;
			dto.edgeId = edge.id;
			socketService?.createEdge(dto);
		},
		[socketService]
	);

	const onRemoveEdge = useCallback(
		(edgeId: string) => {
			const dto = new EdgeRemoveDto();
			dto.edgeId = edgeId;
			socketService?.removeEdge(dto);
		},
		[socketService]
	);

	const onMoveBlock = useCallback(
		(blockId: string, position: XYPosition) => {
			const dto = new BlockMoveDto();
			dto.position = position;
			dto.blockId = blockId;
			socketService?.moveBlock(dto);
		},
		[socketService]
	);

	const onCreateBlock = useCallback(
		(block: Node<BlockState>) => {
			const dto = new BlockCreateDto();
			dto.block = block;
			dto.blockId = block.id;
			socketService?.createBlock(dto);
		},
		[socketService]
	);

	const onRemoveBlock = useCallback(
		(blockId: string) => {
			const dto = new BlockRemoveDto();
			dto.blockId = blockId;
			socketService?.removeBlock(dto);
		},
		[socketService]
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

	const content = createdUserResponse?.project && (
		<ProjectEditorGraph
			setReactInstance={setReactInstance}
			flowState={createdUserResponse?.project.content.flowState}
			setElements={onSetElements}
			onMoveCursor={onMoveCursor}
			onCreateBlock={onCreateBlock}
			onMoveBlock={onMoveBlock}
			onRemoveBlock={onRemoveBlock}
			onCreateEdge={onCreateEdge}
			onRemoveEdge={onRemoveEdge}
			cursorModule={cursors}
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
