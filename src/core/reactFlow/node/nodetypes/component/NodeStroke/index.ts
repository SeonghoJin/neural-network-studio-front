import { Node } from 'react-flow-nns';
import { BlockCategory, BlockState } from '../../../../block';

type NodeStrokeColorTableKey = keyof typeof BlockCategory;

export const NodeStrokeColorTable: {
	[index in NodeStrokeColorTableKey]: string;
} = {
	Layer: '#34b691',
	Math: '#4e50d6',
};

export const getNodeStrokeColor = (e: Node<BlockState>) => {
	const type = e.data?.category as BlockCategory;
	return NodeStrokeColorTable[type];
};

type NodeColorTableKey = keyof typeof BlockCategory;

export const NodeColorTable: {
	[index in NodeColorTableKey]: string;
} = {
	Layer: '#34b691',
	Math: '#4e50d6',
};

export const getNodeColor = (e: Node<BlockState>) => {
	const type = e.data?.category as BlockCategory;
	return NodeColorTable[type];
};
