import React, { memo } from 'react';
import { Handle, NodeProps, Position } from 'react-flow-renderer';

const DefaultNode = ({
	data,
	isConnectable,
	targetPosition = Position.Top,
	sourcePosition = Position.Bottom,
}: NodeProps) => {
	console.log(data);

	return (
		<>
			<div>
				<Handle type="target" position={targetPosition} isConnectable={isConnectable} />
				{data.label}
				<Handle type="source" position={sourcePosition} isConnectable={isConnectable} />
			</div>
		</>
	);
};

export default memo(DefaultNode);
