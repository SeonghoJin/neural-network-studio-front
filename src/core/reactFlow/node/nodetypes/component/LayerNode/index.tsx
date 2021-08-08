import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { createElement, memo, useContext } from 'react';
import { ElementId, NodeProps, useStoreActions, useStoreState } from 'react-flow-renderer';
import NodeIdContext from 'react-flow-renderer/dist/contexts/NodeIdContext';
import { onMouseDown } from 'react-flow-renderer/dist/components/Handle/handler';
import { BlockState } from '../../../../block';
import LayerNodeTable from './LayerNodeTable';
import useTargetCandidates from '../useTargetCandidates';
import style from '../target.module.css';
import useValidationConnection from '../useValidationConnection';

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
	const { data, id } = props;
	const { targetCandidates } = useTargetCandidates();
	const { type } = data as BlockState;
	const classes = useLayerStyle();
	const node = createElement(LayerNodeTable[type], props);
	const connectingNodeId = useStoreState((state) => state.connectionNodeId);
	console.log(connectingNodeId);
	const connectingHandleType = useStoreState((state) => state.connectionHandleType);
	const onConnect = useStoreState((state) => state.onConnect);
	const { isValidationConnection } = useValidationConnection();
	return (
		<>
			<div
				tabIndex={0}
				role="button"
				className={`${classes.wrapper} ${targetCandidates?.has(type) && style.targetCandidate}`}
				onMouseUp={() => {
					if (connectingNodeId === id) return;
					if (onConnect && connectingHandleType && connectingNodeId) {
						const connection = {
							source: id,
							target: id,
							sourceHandle: null,
							targetHandle: null,
							[connectingHandleType]: connectingNodeId,
						};

						if (isValidationConnection(connection)) {
							onConnect(connection);
						}
					}
				}}
			>
				{node}
			</div>
		</>
	);
};

export default memo(LayerNode);
