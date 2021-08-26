import { useCallback, useEffect } from 'react';
import { Edge, Elements, OnLoadParams, Node } from 'react-flow-renderer';
import { useDispatch } from 'react-redux';
import { setReactFlowInstance } from '../../../module/ReactFlowInstance';
import {
	addBlock,
	addEdge,
	changeBlockData,
	removeBlock,
	removeEdge,
	setElementByIdAndUpdatePosition,
	setElements,
} from '../../../module/Elements';
import ProjectEditorGraph from '../projectEditor/projectEditorGraph';
import { useSocket } from '../../../core/Socket/hooks/useSocket';
import { CursorMoveDto } from '../../../core/Socket/dto/cursor.move.dto';
import { XYPosition } from '../../../core/Socket/entities/types';
import Cursors from './Cursors';
import { useRemoteEdgeCreate } from '../../../core/Socket/hooks/useRemoteEdgeCreate';
import { useRemoteEdgeRemove } from '../../../core/Socket/hooks/useRemoteEdgeRemove';
import { useRemoteBlockChange } from '../../../core/Socket/hooks/useRemoteBlockChange';
import { useRemoteBlockRemove } from '../../../core/Socket/hooks/useRemoteBlockRemove';
import { useRemoteBlockCreate } from '../../../core/Socket/hooks/useRemoteBlockCreate';
import { useRemoteBlockMove } from '../../../core/Socket/hooks/useRemoteBlockMove';
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

	useEffect(() => {
		return () => {
			socketService?.disconnect();
		};
	}, [socketService]);

	useEffect(() => {
		if (remoteBlockMove !== null) {
			dispatch(setElementByIdAndUpdatePosition(remoteBlockMove));
		}
	}, [dispatch, remoteBlockMove]);

	useEffect(() => {
		if (remoteBlockCreate !== null) {
			dispatch(addBlock(remoteBlockCreate.block));
		}
	});

	useEffect(() => {
		if (remoteBlockRemove !== null) {
			dispatch(removeBlock(remoteBlockRemove));
		}
	});

	useEffect(() => {
		if (remoteBlockChange != null) {
			dispatch(changeBlockData(remoteBlockChange));
		}
	});

	useEffect(() => {
		if (remoteEdgeCreate != null) {
			dispatch(addEdge(remoteEdgeCreate));
		}
	});

	useEffect(() => {
		if (remoteEdgeRemove != null) {
			dispatch(removeEdge(remoteEdgeRemove));
		}
	});

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

	return <>{content}</>;
};

export default ProjectEditorShareGraphContainer;
