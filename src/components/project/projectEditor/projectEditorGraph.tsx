import { makeStyles } from '@material-ui/core';
import React, { EventHandler, FC, KeyboardEventHandler, useCallback, useEffect, useRef } from 'react';
import ReactFlow, {
	addEdge,
	Background,
	Connection,
	Controls,
	Edge,
	Elements,
	FlowExportObject,
	isNode,
	MiniMap,
	Node,
	OnLoadParams,
	removeElements,
	useStoreActions,
	useStoreState,
	XYPosition,
} from 'react-flow-renderer';
import { useSelector } from 'react-redux';
import { InputBlockState } from '../../../core/reactFlow/block/BlockState';
import { nodeTypes } from '../../../core/reactFlow/node/nodetypes';
import { RootState } from '../../../module';
import {
	canGetNodeData,
	canInsertNode,
	createCustomNode,
	getNodeData,
	getPosition,
} from '../../../core/reactFlow/node';
import createCustomEdge from '../../../core/reactFlow/edge';
import { getNodeColor, getNodeStrokeColor } from '../../../core/reactFlow/node/nodetypes/component/NodeStroke';
import ConnectionLine from '../../../core/reactFlow/connectionLine';
import {
	CreateEdgeBaseData,
	CreateElementBaseData,
	MoveBlockBaseData,
	MoveCursorBasicData,
	MoveCursorEventData,
	RemoveElementBaseData,
} from '../../../core/Project/share/SocketEvent';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
	reactFlow: {
		'&:focus': {
			border: 'initial',
		},
	},
	runButton: {
		position: 'absolute',
		zIndex: 1000,
		top: 10,
		left: 110,
		backgroundColor: '#F7F7F7',
	},
	saveButton: {
		position: 'absolute',
		zIndex: 1000,
		top: 10,
		left: 40,
		backgroundColor: '#F7F7F7',
	},
});

type Props = {
	setReactInstance: EventHandler<any>;
	setElements: EventHandler<any>;
	flowState: FlowExportObject;
	onMoveCursor?: (data: MoveCursorBasicData) => void;
	onMoveBlock?: (data: MoveBlockBaseData) => void;
	cursorModule?: any;
	moveBlock?: MoveBlockBaseData | null;
	removedBlock?: RemoveElementBaseData | null;
	createdBlock?: CreateElementBaseData | null;
	createdRemoteEdge?: CreateEdgeBaseData | null;
	updatePosition?: (data: MoveBlockBaseData) => void;
	onCreateElement?: (data: CreateElementBaseData) => void;
	onCreateEdge?: (data: CreateEdgeBaseData) => void;
	onRemoveElement?: (data: RemoveElementBaseData) => void;
	addRemoteElement?: (data: CreateElementBaseData) => void;
	addRemoteEdge?: (data: CreateEdgeBaseData) => void;
	removeRemoteElement?: (data: RemoveElementBaseData) => void;
};

const ProjectEditorGraph: FC<Props> = ({
	cursorModule,
	onMoveCursor,
	setElements,
	flowState,
	setReactInstance,
	onMoveBlock,
	moveBlock,
	removedBlock,
	createdBlock,
	updatePosition,
	onCreateElement,
	onRemoveElement,
	onCreateEdge,
	addRemoteElement,
	addRemoteEdge,
	createdRemoteEdge,
	removeRemoteElement,
}: Props) => {
	const classes = useStyle();
	const reactFlowWrapper = useRef<HTMLDivElement | null>(null);
	const selectedElements = useStoreState((state) => state.selectedElements);
	const setSelectedElements = useStoreActions((state) => state.setSelectedElements);
	const reactFlowInstance = useSelector((state: RootState) => state.reactFlowInstance.instance);
	const elements = useSelector((state: RootState) => state.elements.elements);

	useEffect(() => {
		if (updatePosition && moveBlock) {
			updatePosition(moveBlock);
		}
	}, [moveBlock, updatePosition]);

	useEffect(() => {
		const inputBlockState = new InputBlockState();
		const inputNode = createCustomNode({
			data: inputBlockState,
		});
		setElements(flowState?.elements || [inputNode]);
	}, [flowState?.elements, setElements]);

	useEffect(() => {
		if (removedBlock && removeRemoteElement) {
			removeRemoteElement(removedBlock);
		}
	}, [removeRemoteElement, removedBlock]);

	useEffect(() => {
		if (createdBlock && addRemoteElement) {
			addRemoteElement(createdBlock);
		}
	}, [addRemoteElement, createdBlock]);

	useEffect(() => {
		if (createdRemoteEdge && addRemoteEdge) {
			addRemoteEdge(createdRemoteEdge);
		}
	}, [addRemoteEdge, createdRemoteEdge]);

	const onConnect = useCallback(
		(params: Edge | Connection) => {
			if (onCreateEdge) {
				onCreateEdge({
					edge: createCustomEdge(params),
				});
			}
			setElements(addEdge(createCustomEdge(params), elements));
		},
		[elements, onCreateEdge, setElements]
	);

	const onElementsRemove = useCallback(
		(elementsToRemove: Elements<any>) => {
			if (onRemoveElement) {
				onRemoveElement({
					elements: elementsToRemove,
				});
			}
			setElements(removeElements(elementsToRemove, elements));
		},
		[elements, onRemoveElement, setElements]
	);

	const onDragOver = useCallback((e: React.DragEvent) => {
		const localEvent = e;
		localEvent.preventDefault();
		localEvent.dataTransfer.dropEffect = 'copy';
	}, []);

	const onDrop = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault();
			const localEvent = e;
			const { dataTransfer } = localEvent;
			if (!canGetNodeData(dataTransfer)) return;
			const newNode: Node = createCustomNode({
				position: getPosition(localEvent, reactFlowWrapper.current, reactFlowInstance),
				data: getNodeData(dataTransfer),
			});
			if (!canInsertNode(elements, newNode)) return;
			setElements(elements.concat(newNode));
			if (onCreateElement) {
				onCreateElement({
					element: newNode,
				});
			}
			setSelectedElements(newNode);
		},
		[elements, onCreateElement, reactFlowInstance, setElements, setSelectedElements]
	);

	const onLoad = useCallback(
		(instance: OnLoadParams) => {
			setReactInstance(instance);
		},
		[setReactInstance]
	);

	const onKeyDown: KeyboardEventHandler = useCallback(
		(event) => {
			if ((event.code === 'Delete' || event.code === 'Escape') && selectedElements) {
				onElementsRemove(selectedElements);
			}
		},
		[onElementsRemove, selectedElements]
	);

	return (
		<div ref={reactFlowWrapper} className={classes.wrapper}>
			<ReactFlow
				onMouseMove={(e) => {
					if (onMoveCursor) {
						const position = getPosition(e, reactFlowWrapper.current, reactFlowInstance);
						onMoveCursor({ position: position as XYPosition });
					}
				}}
				onNodeDrag={(e, node) => {
					if (onMoveBlock) {
						const { position, id } = node;
						onMoveBlock({ blockId: id, position });
					}
				}}
				className={classes.reactFlow}
				elements={elements}
				onDrop={onDrop}
				onDragOver={onDragOver}
				onLoad={onLoad}
				onConnect={onConnect}
				onKeyDown={onKeyDown}
				onElementsRemove={onElementsRemove}
				tabIndex={0}
				nodeTypes={nodeTypes}
				defaultPosition={flowState?.position}
				defaultZoom={flowState?.zoom}
				connectionLineComponent={ConnectionLine}
			>
				{cursorModule}
				<Controls
					style={{
						top: 10,
						left: 10,
						bottom: 'initial',
					}}
				/>
				<MiniMap
					nodeStrokeColor={(n) => {
						return getNodeStrokeColor(n);
					}}
					nodeColor={(n) => {
						return getNodeColor(n);
					}}
				/>
				<Background color="#aaa" />
			</ReactFlow>
		</div>
	);
};

ProjectEditorGraph.defaultProps = {
	onMoveCursor: undefined,
	cursorModule: undefined,
	onMoveBlock: undefined,
	moveBlock: undefined,
	updatePosition: undefined,
	onCreateElement: undefined,
	onRemoveElement: undefined,
	onCreateEdge: undefined,
	removedBlock: undefined,
	createdBlock: undefined,
	addRemoteElement: undefined,
	addRemoteEdge: undefined,
	removeRemoteElement: undefined,
	createdRemoteEdge: undefined,
};

export default ProjectEditorGraph;
