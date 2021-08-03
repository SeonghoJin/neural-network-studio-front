import React, { createElement, memo } from 'react';
import { Handle, NodeProps, Position } from 'react-flow-renderer';
import { BlockState } from '../../../../../Project/block';
import LayerNodeTable from './LayerNodeTable';

const DefaultNode = ({
	data,
	isConnectable,
	targetPosition = Position.Top,
	sourcePosition = Position.Bottom,
}: NodeProps) => {
	const blockState: BlockState = data as BlockState;
	const { type } = blockState;
	return createElement(LayerNodeTable[type], {
		data,
		isConnectable,
		targetPosition,
		sourcePosition,
	});
};

export default memo(DefaultNode);
