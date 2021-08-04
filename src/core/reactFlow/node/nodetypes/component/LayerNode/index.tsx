import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { createElement, memo } from 'react';
import { Handle, NodeProps, Position } from 'react-flow-renderer';
import { BlockState } from '../../../../block';
import LayerNodeTable from './LayerNodeTable';

const useLayerStyle = makeStyles({
	wrapper: {
		padding: 10,
		borderRadius: 3,
		width: 150,
		fontSize: 12,
		color: '#222',
		textAlign: 'center',
		borderWidth: '1px',
		borderStyle: 'solid',
		background: '#fff',
		'&:focus': {
			boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.08)',
		},
	},
});

const LayerNode = (props: NodeProps) => {
	const { data, selected } = props;
	const blockState: BlockState = data as BlockState;
	const { type } = blockState;
	const classes = useLayerStyle();
	const node = createElement(LayerNodeTable[type], props);
	return (
		<div tabIndex={0} role="button" className={`${classes.wrapper} ${selected}`}>
			{node}
		</div>
	);
};

export default memo(LayerNode);
