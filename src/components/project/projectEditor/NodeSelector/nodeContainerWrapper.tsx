import { makeStyles } from '@material-ui/core';
import 'react-bootstrap/dist/react-bootstrap.min';
import React from 'react';
import { blockStates } from '../../../../core/reactFlow/block/BlockState';
import NodeContainer from './nodeContainer';
import Node from './node';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
	},
	container: {
		paddingRight: 10,
		paddingLeft: 0,
		listStyle: 'none',
	},
});

const blocks = blockStates;

const NodeContainerWrapper = () => {
	const classes = useStyle();
	return (
		<div className={classes.wrapper}>
			<ul className={classes.container}>
				{blocks.map((block) => {
					return (
						<NodeContainer key={block.type} name={block.type} elementNumber={block.states.length}>
							{block.states.map((blockState, index) => {
								return <Node key={blockState.type} state={blockState} />;
							})}
						</NodeContainer>
					);
				})}
			</ul>
		</div>
	);
};

export default NodeContainerWrapper;
