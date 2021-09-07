import { makeStyles } from '@material-ui/core';
import React, { EventHandler, FC, KeyboardEventHandler, ReactNode, useCallback, useEffect, useRef } from 'react';
import ReactFlow, {
	addEdge,
	Background,
	Connection,
	Controls,
	Edge,
	Elements,
	FlowExportObject,
	isEdge,
	isNode,
	MiniMap,
	Node,
	OnLoadParams,
	removeElements,
	updateEdge,
	useStoreActions,
	useStoreState,
	XYPosition,
} from 'react-flow-nns';
import { useSelector } from 'react-redux';
import { BlockState, InputBlockState } from '../../../core/reactFlow/block/BlockState';
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
import useValidationConnection from '../../../core/reactFlow/node/validation/useValidationConnection';

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
	onMoveCursor?: (position: XYPosition) => void;
	onCreateBlock?: (block: Node<BlockState>) => void;
	onMoveBlock?: (blockId: string, position: XYPosition) => void;
	onRemoveBlock?: (blockId: string) => void;
	onCreateEdge?: (elements: Elements) => void;
	onRemoveEdge?: (edgeId: string) => void;
	onUpdateEdge?: (elements: Elements) => void;
	cursorModule?: ReactNode;
};

const ProjectEditorGraph: FC<Props> = ({
	setReactInstance,
	setElements,
	flowState,
	onCreateBlock,
	onMoveBlock,
	onUpdateEdge,
	onRemoveBlock,
	onCreateEdge,
	onRemoveEdge,
	onMoveCursor,
	cursorModule,
}: Props) => {
	const classes = useStyle();
	const reactFlowWrapper = useRef<HTMLDivElement | null>(null);
	const selectedElements = useStoreState((state) => state.selectedElements);
	const setSelectedElements = useStoreActions((state) => state.setSelectedElements);
	const reactFlowInstance = useSelector((state: RootState) => state.reactFlowInstance.instance);
	const elements = useSelector((state: RootState) => state.elements.elements);
	const { isValidationConnection } = useValidationConnection();

	useEffect(() => {
		const inputBlockState = new InputBlockState();
		const inputNode = createCustomNode({
			data: inputBlockState,
		});
		setElements(flowState?.elements || [inputNode]);
	}, [flowState?.elements, setElements]);

	const onConnect = useCallback(
		(params: Edge | Connection) => {
			const newElements = addEdge(createCustomEdge(params), elements);
			if (onCreateEdge) {
				onCreateEdge(newElements);
			}
			setElements(newElements);
		},
		[elements, onCreateEdge, setElements]
	);

	const onElementsRemove = useCallback(
		(elementsToRemove: Elements<any>) => {
			setElements(removeElements(elementsToRemove, elements));
		},
		[elements, setElements]
	);

	const onEdgeUpdate = useCallback(
		(oldEdge: Edge, newConnection: Connection) => {
			setElements((els: Elements) => {
				const newElements = updateEdge(oldEdge, newConnection, els);
				if (onUpdateEdge) {
					onUpdateEdge(newElements);
				}
				return updateEdge(oldEdge, newConnection, els);
			});
		},
		[onUpdateEdge, setElements]
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
			if (onCreateBlock) {
				onCreateBlock(newNode);
			}
			setSelectedElements(newNode);
		},
		[elements, onCreateBlock, reactFlowInstance, setElements, setSelectedElements]
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
				if (onRemoveBlock && isNode(selectedElements[0])) {
					onRemoveBlock(selectedElements[0].id);
				}
				if (onRemoveEdge && isEdge(selectedElements[0])) {
					onRemoveEdge(selectedElements[0].id);
				}
			}
		},
		[onElementsRemove, onRemoveBlock, onRemoveEdge, selectedElements]
	);

	return (
		<div ref={reactFlowWrapper} className={classes.wrapper}>
			<ReactFlow
				onMouseMove={(e) => {
					if (onMoveCursor) {
						const position = getPosition(e, reactFlowWrapper.current, reactFlowInstance);
						onMoveCursor(position as XYPosition);
					}
				}}
				onNodeDrag={(e, node) => {
					if (onMoveBlock) {
						const { position, id } = node;
						onMoveBlock(id, position);
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
				onEdgeUpdate={onEdgeUpdate}
				tabIndex={0}
				nodeTypes={nodeTypes}
				defaultPosition={flowState?.position}
				defaultZoom={flowState?.zoom}
				connectionLineComponent={ConnectionLine}
				isValidConnection={isValidationConnection}
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
	onCreateBlock: undefined,
	onMoveBlock: undefined,
	onRemoveBlock: undefined,
	onCreateEdge: undefined,
	onRemoveEdge: undefined,
	cursorModule: undefined,
	onUpdateEdge: undefined,
};

export default ProjectEditorGraph;
