import React, { useState, useEffect, useCallback, memo, SyntheticEvent } from 'react';

import ReactFlow, {
	isEdge,
	removeElements,
	addEdge,
	MiniMap,
	Controls,
	Node,
	Handle,
	Position,
} from 'react-flow-renderer';
import { nodetypes } from '../../../core/nodetypes';

const ColorSelectorNode = memo(({ data }: { data: any }) => (
	<>
		<Handle
			type="target"
			position={Position.Left}
			style={{ background: '#555' }}
			onConnect={(params) => console.log('handle onConnect', params)}
		/>
		<div>
			Custom Color Picker Node: <strong>{data.color}</strong>
		</div>
		<input className="nodrag" type="color" onChange={data.onChange} defaultValue={data.color} />
		<Handle type="source" position={Position.Right} id="a" style={{ top: 10, background: '#555' }} />
		<Handle type="source" position={Position.Right} id="b" style={{ bottom: 10, top: 'auto', background: '#555' }} />
	</>
));

const onNodeDragStop = (event: SyntheticEvent, node: Node) => console.log('drag stop', node);
const onElementClick = (event: SyntheticEvent, element: Node) => console.log('click', element);

const initBgColor = '#1A192B';

const connectionLineStyle = { stroke: '#fff' };
const snapGrid = [20, 20];
const nodeTypes = {
	...nodetypes,
	selectorNode: ColorSelectorNode,
};

const CustomNodeFlow = () => {
	const [reactflowInstance, setReactflowInstance] = useState(null);
	const [elements, setElements] = useState([]);
	const [bgColor, setBgColor] = useState(initBgColor);

	useEffect(() => {
		const onChange = (event: SyntheticEvent) => {
			setElements(
				(els: any[]) =>
					els.map((e: any) => {
						if (isEdge(e) || e.id !== '2') {
							return e;
						}

						const color = (event.target as HTMLInputElement).value;

						setBgColor(color);

						return {
							...e,
							data: {
								...e.data,
								color,
							},
						};
					}) as any
			);
		};

		setElements([
			{
				id: '1',
				type: 'input',
				data: { label: 'An input node' },
				position: { x: 0, y: 50 },
				sourcePosition: 'right',
			},
			{
				id: '2',
				type: 'selectorNode',
				data: { onChange, color: initBgColor },
				style: { border: '1px solid #777', padding: 10 },
				position: { x: 300, y: 50 },
			},
			{
				id: '3',
				type: 'output',
				data: { label: 'Output A' },
				position: { x: 650, y: 25 },
				targetPosition: 'left',
			},
			{
				id: '4',
				type: 'output',
				data: { label: 'Output B' },
				position: { x: 650, y: 100 },
				targetPosition: 'left',
			},
			{
				id: 'e1-2',
				source: '1',
				target: '2',
				animated: true,
				style: { stroke: '#fff' },
			},
			{
				id: 'e2a-3',
				source: '2',
				target: '3',
				sourceHandle: 'a',
				animated: true,
				style: { stroke: '#fff' },
			},
			{
				id: 'e2b-4',
				source: '2',
				target: '4',
				sourceHandle: 'b',
				animated: true,
				style: { stroke: '#fff' },
			},
		] as any);
	}, []);

	useEffect(() => {
		if (reactflowInstance && elements.length > 0) {
			(reactflowInstance as any).fitView();
		}
	}, [reactflowInstance, elements.length]);

	const onElementsRemove = useCallback(
		// eslint-disable-next-line max-len
		(elementsToRemove: any) => {
			setElements((els: any) => removeElements(elementsToRemove, els) as any);
		},
		[]
	);
	const onConnect = useCallback(
		(params: any) =>
			setElements((els: any) => addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, els) as any),
		[]
	);
	const onLoad = useCallback(
		(rfi) => {
			if (!reactflowInstance) {
				setReactflowInstance(rfi);
				console.log('flow loaded:', rfi);
			}
		},
		[reactflowInstance]
	);

	return (
		<div style={{ height: 600 }}>
			<h1>CustomNode Example</h1>
			<ReactFlow
				elements={elements}
				onElementClick={onElementClick as any}
				onElementsRemove={onElementsRemove}
				onConnect={onConnect}
				onNodeDragStop={onNodeDragStop}
				style={{ background: bgColor }}
				onLoad={onLoad}
				nodeTypes={nodeTypes}
				connectionLineStyle={connectionLineStyle}
				snapToGrid
				snapGrid={snapGrid as any}
				defaultZoom={1.5}
			>
				<Controls />
				<MiniMap
					nodeStrokeColor={(n) => {
						if (n.type === 'input') return '#0041d0';
						if (n.type === 'selectorNode') return bgColor;
						if (n.type === 'output') return '#ff0072';
						return '#FFFFFF';
					}}
					nodeColor={(n) => {
						if (n.type === 'selectorNode') return bgColor;
						return '#fff';
					}}
				/>
			</ReactFlow>
		</div>
	);
};

export default CustomNodeFlow;
