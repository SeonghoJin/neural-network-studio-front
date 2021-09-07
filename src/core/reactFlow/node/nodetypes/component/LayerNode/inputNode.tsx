import React, { memo } from 'react';
import { Handle, NodeProps, Position } from 'react-flow-nns';
import { makeStyles } from '@material-ui/core';
import useValidationConnection from '../../../validation/useValidationConnection';
import { BlockState } from '../../../../block';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
});

const InputNode = ({ data, isConnectable, sourcePosition = Position.Bottom }: NodeProps<BlockState>) => {
	const classes = useStyle();
	const { isValidationConnection } = useValidationConnection();
	return (
		<div className={classes.wrapper}>
			<Handle
				type="source"
				position={sourcePosition}
				isConnectable={isConnectable}
				isValidConnection={isValidationConnection}
			/>
			{data.label}
		</div>
	);
};

export default memo(InputNode);
