import { Node } from 'react-flow-renderer';
import { BlockCategory, BlockState } from '../../../../block';

type NodeStrokeColorTableKey = keyof typeof BlockCategory;

const NodeStrokeColorTable: {
	[index in NodeStrokeColorTableKey]: string;
} = {
	Layer: '#000000',
};

export const getNodeStrokeColor = (e: Node<BlockState>) => {
	const type = e.data?.category as BlockCategory;
	return NodeStrokeColorTable[type];
};

type NodeColorTableKey = keyof typeof BlockCategory;

const NodeColorTable: {
	[index in NodeColorTableKey]: string;
} = {
	Layer: '#FFFFFF',
};

export const getNodeColor = (e: Node<BlockState>) => {
	const type = e.data?.category as BlockCategory;
	return NodeColorTable[type];
};
