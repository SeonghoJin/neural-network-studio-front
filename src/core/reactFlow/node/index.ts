import { Elements, Node, isNode, OnLoadParams } from 'react-flow-renderer';
import React from 'react';
import { BlockState, BlockType } from '../../../core/reactFlow/block';
import { getNodeId } from '../../../util';

const UNIQUE = 1;
const INFINITY = 100;

type MAXIMUM_NUMBER_PER_BLOCK_TYPE_AT_GRAPH_KEY = keyof typeof BlockType;
const MAXIMUM_NUMBER_PER_BLOCK_TYPE_AT_GRAPH: {
	[K in MAXIMUM_NUMBER_PER_BLOCK_TYPE_AT_GRAPH_KEY]: number;
} = {
	Activation: 3,
	AveragePooling2D: INFINITY,
	BatchNormalization: INFINITY,
	Conv2D: INFINITY,
	Dropout: INFINITY,
	Flatten: INFINITY,
	MaxPool2D: INFINITY,
	Dense: INFINITY,
	Input: UNIQUE,
};

export type CustomNodeParams = {
	position?: any;
	data: BlockState;
};

export const createCustomNode = ({ position, data }: CustomNodeParams) => {
	return {
		id: getNodeId(),
		type: data.category || 'default',
		position: position || {
			x: 100,
			y: 100,
		},
		data,
	};
};

export const REACT_APPLICATION_DRAG_EVENT_DATA = 'application/nodedata';

export const getNodeData = (dataTransfer: DataTransfer): BlockState => {
	const data = dataTransfer.getData(REACT_APPLICATION_DRAG_EVENT_DATA);
	return JSON.parse(data);
};

export const canGetNodeData = (dataTransfer: DataTransfer) => {
	return dataTransfer.types.includes(REACT_APPLICATION_DRAG_EVENT_DATA);
};

export const getPosition = (
	e: React.DragEvent,
	reactFlowWrapper: HTMLDivElement | null,
	reactFlowInstance: OnLoadParams | null
) => {
	const reactFlowBounds = reactFlowWrapper?.getBoundingClientRect();
	const position = reactFlowInstance?.project({
		x: e.clientX - (reactFlowBounds?.left || 0),
		y: e.clientY - (reactFlowBounds?.top || 0),
	});

	return position;
};

export const canInsertNode = (elements: Elements, node: Node<BlockState>) => {
	const type = node.data?.type;
	const limit = MAXIMUM_NUMBER_PER_BLOCK_TYPE_AT_GRAPH[type as BlockType];
	const currentCount = elements.filter((e) => {
		if (!isNode(e)) {
			return false;
		}
		const blockStateNode: Node<BlockState> = e;
		return blockStateNode.data?.type === node.data?.type;
	}).length;
	return currentCount < limit;
};

export default MAXIMUM_NUMBER_PER_BLOCK_TYPE_AT_GRAPH;
