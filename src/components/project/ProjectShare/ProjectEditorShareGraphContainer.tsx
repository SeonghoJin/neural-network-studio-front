import { useCallback, useEffect } from 'react';
import { Elements, OnLoadParams, Node } from 'react-flow-nns';
import { useDispatch } from 'react-redux';
import { setReactFlowInstance } from '../../../module/ReactFlowInstance';
import {
	addBlock,
	removeBlock,
	removeEdge,
	setElementByIdAndUpdateConfig,
	setElementByIdAndUpdateLabel,
	setElementByIdAndUpdatePosition,
	setElements,
} from '../../../module/Elements';
import ProjectEditorGraph from '../projectEditor/projectEditorGraph';
import { useSocket } from '../../../core/Socket/hooks/useSocket';
import { CursorMoveDto } from '../../../core/Socket/dto/cursor.move.dto';
import { XYPosition } from '../../../core/Socket/entities/types';
import { useRemoteEdgeCreate } from '../../../core/Socket/hooks/useRemoteEdgeCreate';
import { useRemoteEdgeRemove } from '../../../core/Socket/hooks/useRemoteEdgeRemove';
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
import CursorModule from './CursorModule';
import { useRemoteEdgeUpdate } from '../../../core/Socket/hooks/useRemoteEdgeUpdate';
import { useRemoteBlockConfigChange } from '../../../core/Socket/hooks/useRemoteBlockConfigChange';
import { useRemoteBlockLabelChange } from '../../../core/Socket/hooks/useRemoteBlockLabelChange';
import { EdgeUpdateDto } from '../../../core/Socket/dto/edge.update.dto';
import { CircleLoading } from '../../utils/Loading/CircularLoading';
import { useCursorTracker } from '../../CursorTracker/useCursorTracker';

const ProjectEditorShareGraphContainer = () => {
	const { socketService } = useSocket();
	const { remoteEdgeCreate } = useRemoteEdgeCreate();
	const { remoteEdgeRemove } = useRemoteEdgeRemove();
	const { remoteEdgeUpdate } = useRemoteEdgeUpdate();
	const { remoteBlockConfigChange } = useRemoteBlockConfigChange();
	const { remoteBlockLabelChange } = useRemoteBlockLabelChange();
	const { remoteBlockRemove } = useRemoteBlockRemove();
	const { remoteBlockCreate } = useRemoteBlockCreate();
	const { remoteBlockMove } = useRemoteBlockMove();
	const { createdUserResponse } = useCreateUserResponse();
	const { cursorDragEvent } = useCursorTracker();
	const dispatch = useDispatch();
	const setReactInstance = useCallback(
		(instance: OnLoadParams) => {
			dispatch(setReactFlowInstance(instance));
		},
		[dispatch]
	);

	const onSetElements = useCallback(
		(elementsOrFunc: Elements | ((elem: Elements) => Elements)) => {
			dispatch(setElements(elementsOrFunc));
		},
		[dispatch]
	);

	const onMoveCursor = useCallback(
		(position: XYPosition, dragFlag?: boolean) => {
			const dto = new CursorMoveDto();
			dto.cursor = {
				position,
				user: createdUserResponse?.user as User,
				drag: dragFlag || cursorDragEvent?.flag,
			};
			socketService?.moveCursor(dto);
		},
		[createdUserResponse?.user, cursorDragEvent?.flag, socketService]
	);

	const onCreateEdge = useCallback(
		(elements: Elements) => {
			const dto = new EdgeCreateDto();
			dto.elements = elements;
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

	const onUpdateEdge = useCallback(
		(elements: Elements) => {
			const dto = new EdgeUpdateDto();
			dto.elements = elements;
			socketService?.updateEdge(dto);
		},
		[socketService]
	);

	useEffect(() => {
		if (remoteBlockMove !== null) {
			dispatch(setElementByIdAndUpdatePosition(remoteBlockMove));
		}
	}, [dispatch, remoteBlockMove]);

	useEffect(() => {
		if (remoteBlockCreate !== null) {
			dispatch(addBlock(remoteBlockCreate));
		}
	}, [dispatch, remoteBlockCreate]);

	useEffect(() => {
		if (remoteBlockRemove !== null) {
			dispatch(removeBlock(remoteBlockRemove));
		}
	}, [dispatch, remoteBlockRemove]);

	useEffect(() => {
		if (remoteEdgeCreate?.elements != null) {
			dispatch(setElements(remoteEdgeCreate.elements));
		}
	}, [dispatch, remoteEdgeCreate]);

	useEffect(() => {
		if (remoteEdgeRemove != null) {
			dispatch(removeEdge(remoteEdgeRemove));
		}
	}, [dispatch, remoteEdgeRemove]);

	useEffect(() => {
		if (remoteEdgeUpdate?.elements != null) {
			dispatch(setElements(remoteEdgeUpdate.elements));
		}
	}, [dispatch, remoteEdgeUpdate?.elements]);

	useEffect(() => {
		if (remoteBlockConfigChange != null) {
			const { blockId, param } = remoteBlockConfigChange;
			if (blockId === undefined) {
				throw new Error('잘못된 데이터입니다.');
			}
			dispatch(
				setElementByIdAndUpdateConfig({
					key: param?.name || '',
					value: param?.value || '',
					id: blockId,
				})
			);
		}
	}, [dispatch, remoteBlockConfigChange]);

	useEffect(() => {
		if (remoteBlockLabelChange != null) {
			const { blockId, data } = remoteBlockLabelChange;
			if (blockId === undefined) {
				throw new Error('잘못된 데이터입니다.');
			}
			dispatch(
				setElementByIdAndUpdateLabel({
					id: blockId,
					label: data || '',
				})
			);
		}
	}, [dispatch, remoteBlockLabelChange]);

	return (
		<>
			{(createdUserResponse?.project?.flowState && (
				<ProjectEditorGraph
					setReactInstance={setReactInstance}
					flowState={createdUserResponse?.project.flowState}
					setElements={onSetElements}
					onMoveCursor={onMoveCursor}
					onCreateBlock={onCreateBlock}
					onMoveBlock={onMoveBlock}
					onRemoveBlock={onRemoveBlock}
					onCreateEdge={onCreateEdge}
					onRemoveEdge={onRemoveEdge}
					onUpdateEdge={onUpdateEdge}
					cursorModule={<CursorModule />}
				/>
			)) || <CircleLoading />}
		</>
	);
};

export default ProjectEditorShareGraphContainer;
