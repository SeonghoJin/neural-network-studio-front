import ReactFlow from 'react-flow-renderer';
import { nodetypes } from '../../../core/nodetypes';

const elements = [
	{
		id: '2',
		type: 'testNode1',
		position: { x: 100, y: 100 },
		data: { text: '123' },
	},
];

const CustomNodeExample = () => (
	<div style={{ height: 300 }}>
		<h1>CustomNode 테스트</h1>
		<ReactFlow elements={elements} nodeTypes={nodetypes} />
	</div>
);

export default CustomNodeExample;
