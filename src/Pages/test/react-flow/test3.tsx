import ReactFlow, { Node, Edge } from 'react-flow-renderer';
import { nodetypes } from '../../../core/nodetypes';
import TestNode1 from '../../../core/nodetypes/test/TestNode1';
import { Position } from '../../../core/types';

const elements: Array<Node | Edge> = [];

const CustomNodeExample = () => (
	<div style={{ height: 600 }}>
		<h1>Handle 테스트</h1>
		<ReactFlow elements={elements} nodeTypes={nodetypes} />
	</div>
);

export default CustomNodeExample;
