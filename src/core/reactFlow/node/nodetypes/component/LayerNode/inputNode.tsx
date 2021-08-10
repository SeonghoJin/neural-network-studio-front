import React, { memo, useCallback } from 'react';
import { Connection, Node, Handle, NodeProps, Position, FlowElement } from 'react-flow-renderer';
import { makeStyles } from '@material-ui/core';
import useValidationConnection from '../useValidationConnection';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
});

const InputNode = ({ data, isConnectable, sourcePosition = Position.Bottom }: NodeProps) => {
	const classes = useStyle();
	const { isValidationConnection } = useValidationConnection();
	return (
		<div className={classes.wrapper}>
			{data.label}
			<Handle
				type="source"
				position={sourcePosition}
				isConnectable={isConnectable}
				isValidConnection={isValidationConnection}
			/>
		</div>
	);
};

export default memo(InputNode);
