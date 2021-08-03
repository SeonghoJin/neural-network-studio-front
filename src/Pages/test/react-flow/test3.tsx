import ReactFlow, { Node, Edge } from 'react-flow-renderer';
import { nodetypes } from '../../../core/reactFlow/node/nodetypes';
import TestNode1 from '../../../core/reactFlow/node/nodetypes/test/TestNode1';
import { Position } from '../../../core/Project/types';

const elements: Array<Node | Edge> = [];

const CustomNodeExample = () => (
	<div style={{ height: 600 }}>
		<h1>Handle 테스트</h1>
		<ReactFlow elements={elements} nodeTypes={nodetypes} />
	</div>
);

export default CustomNodeExample;
