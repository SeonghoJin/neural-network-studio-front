import { Node } from 'react-flow-nns';
import { BlockCategory, BlockState } from '../../../../block';

type NodeStrokeColorTableKey = keyof typeof BlockCategory;

export const NodeStrokeColorTable: {
	[index in NodeStrokeColorTableKey]: string;
} = {
	Layer: '#00AE84',
	Math: '#FFFFFF',
};

export const getNodeStrokeColor = (e: Node<BlockState>) => {
	const type = e.data?.category as BlockCategory;
	return NodeStrokeColorTable[type];
};

type NodeColorTableKey = keyof typeof BlockCategory;

export const NodeColorTable: {
	[index in NodeColorTableKey]: string;
} = {
	Layer: '#38b693',
	Math: '#FFFFFF',
};

export const getNodeColor = (e: Node<BlockState>) => {
	const type = e.data?.category as BlockCategory;
	return NodeColorTable[type];
};
