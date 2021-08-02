import { useState } from 'react';
import ReactFlow, { addEdge, Edge, Node, ReactFlowProvider, useStoreActions, useStoreState } from 'react-flow-renderer';

const SideBar = () => {
	const nodes = useStoreState((store) => store.nodes);
	const transform = useStoreState((store) => store.transform);
	const setSelectedElements = useStoreActions((actions) => actions.setSelectedElements);

	const selectAll = () => {
		setSelectedElements(
			nodes.map((node) => ({
				id: node.id,
				type: node.type,
			}))
		);
	};

	return (
		<aside>
			<div className="description">
				{/* eslint-disable-next-line max-len */}
				This is an example of how you can access the internal state outside of the ReactFlow component.
			</div>
			<div className="title">Zoom & pan transform</div>
			<div className="transform">
				[{transform[0].toFixed(2)},{transform[1].toFixed(2)},{transform[2].toFixed(2)}]
			</div>
			<div className="title">Nodes</div>
			{nodes.map((node: Node) => (
				<div key={node.id}>
					{/* eslint-disable-next-line max-len,no-underscore-dangle */}
					Node {node.data.label} - x:{node.__rf.position.x.toFixed(2)}, y:{node.__rf.position.y.toFixed(2)}
				</div>
			))}
			<div className="selectall">
				<button type="button" onClick={selectAll}>
					select all nodes
				</button>
			</div>
		</aside>
	);
};

const onElementClick = (event: MouseEvent, element: Node | Edge) => console.log('click', element);

const initialElements = [
	{
		id: 'provider-1',
		type: 'input',
		data: { label: 'Node 1' },
		position: {
			x: 250,
			y: 5,
		},
	},
	{
		id: 'provider-2',
		data: { label: 'Node 2' },
		position: {
			x: 100,
			y: 100,
		},
	},
	{
		id: 'provider-3',
		data: { label: 'Node 3' },
		position: {
			x: 400,
			y: 100,
		},
	},
	{
		id: 'provider-4',
		data: { label: 'Node 4' },
		position: {
			x: 400,
			y: 200,
		},
	},
	{
		id: 'provider-e1-2',
		source: 'provider-1',
		target: 'provider-2',
		animated: true,
	},
	{
		id: 'provider-e1-3',
		source: 'provider-1',
		target: 'provider-3',
	},
];

const ProviderFlow = () => {
	const [elements, setElements] = useState(initialElements);
	const onConnect = (params: any) => setElements((els) => addEdge(params, els) as any);

	return (
		<div className="providerflow">
			<ReactFlowProvider>
				<div className="reactflow-wrapper">
					<ReactFlow style={{ height: 100 }} elements={elements} onConnect={onConnect} />
				</div>
				<SideBar />
			</ReactFlowProvider>
		</div>
	);
};

export default ProviderFlow;
