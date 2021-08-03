import React, { memo } from 'react';
import { Handle, NodeProps, Position } from 'react-flow-renderer';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
});

const InputNode = ({ data, isConnectable, sourcePosition = Position.Bottom }: NodeProps) => {
	const classes = useStyle();
	return (
		<div className={classes.wrapper}>
			{data.label}
			<Handle type="source" position={sourcePosition} isConnectable={isConnectable} />
		</div>
	);
};

export default memo(InputNode);
