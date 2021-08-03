import ReactFlow from 'react-flow-renderer';

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
	</div>
);

export default CustomNodeExample;
