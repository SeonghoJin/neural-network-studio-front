import { makeStyles } from '@material-ui/core';
import 'react-bootstrap/dist/react-bootstrap.min';
import React from 'react';
import NodeContainer from './nodeContainer';
import Node from './node';
import { BlockRenderData } from '../../../../core/Project/settings/BlockDragAndDropRenderData';

const blocks = BlockRenderData;

const NodeContainerWrapper = () => {
	return (
		<>
			{blocks.map((block) => {
				return (
					<NodeContainer key={block.type} name={block.type} elementNumber={block.states.length}>
						{block.states.map((blockState, index) => {
							return <Node key={blockState.type} state={blockState} />;
						})}
					</NodeContainer>
				);
			})}
		</>
	);
};

export default NodeContainerWrapper;
