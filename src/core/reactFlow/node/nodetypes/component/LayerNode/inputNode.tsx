import React, { memo } from 'react';
import { Handle, NodeProps, Position } from 'react-flow-renderer';

const InputNode = ({ data, isConnectable, sourcePosition = Position.Bottom }: NodeProps) => {
	return (
		<>
			{data.label}
			<Handle type="source" position={sourcePosition} isConnectable={isConnectable} />
		</>
	);
};

export default memo(InputNode);
