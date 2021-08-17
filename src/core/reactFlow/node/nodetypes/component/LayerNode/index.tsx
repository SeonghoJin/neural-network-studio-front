import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { createElement, memo } from 'react';
import { NodeProps, useStoreState } from 'react-flow-renderer';
import { BlockState } from '../../../../block';
import LayerNodeTable from './LayerNodeTable';
import useTargetCandidates from '../useTargetCandidates';
import style from '../target.module.css';
import useValidationConnection from '../useValidationConnection';

const useLayerStyle = makeStyles({
	wrapper: {
		padding: 10,
		paddingTop: 5,
		paddingBottom: 20,
		borderRadius: 3,
		fontSize: 12,
		color: '#222',
		borderWidth: '1px',
		borderStyle: 'solid',
		background: '#fff',
		'&:focus': {
			boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.08)',
		},
	},
	nodeContentWrapper: {
		width: '100%',
		height: '100%',
		textAlign: 'center',
	},
	nodeContent: {
		fontSize: 16,
	},
	nodeHeaderWrapper: {
		width: 'fit-content',
		height: 'fit-content',
		marginBottom: 5,
	},
	nodeHeader: {
		fontSize: 7,
		opacity: 0.5,
	},
});

const LayerNode = (props: NodeProps<BlockState>) => {
	const { data, id } = props;
	const { targetCandidates } = useTargetCandidates();
	const { type } = data as BlockState;
	const classes = useLayerStyle();
	const node = createElement(LayerNodeTable[type], props);
	const connectingNodeId = useStoreState((state) => state.connectionNodeId);
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
				<div className={classes.nodeHeaderWrapper}>
					<span className={classes.nodeHeader}>{type}</span>
				</div>
				<div className={classes.nodeContentWrapper}>
					<div className={classes.nodeContent}>{node}</div>
				</div>
			</div>
		</>
	);
};

export default memo(LayerNode);
