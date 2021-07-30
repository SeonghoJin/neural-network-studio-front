import React, { useState, useCallback } from 'react';
import ReactFlow, { ReactFlowProvider } from 'react-flow-renderer';
import localforage from 'localforage';

localforage.config({
	name: 'react-flow-docs',
	storeName: 'flows',
});

const store = localforage.createInstance({
	name: 'docs',
});

const key = 'test';

const getNodeId = () => `randomnode_${+new Date()}`;

const initialElements = [
	{ id: '1', data: { label: 'Node 1' }, position: { x: 100, y: 100 } },
	{ id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 200 } },
	{ id: 'e1-2', source: '1', target: '2' },
];

const SaveRestore = () => {
	const [rfInstance, setRfInstance] = useState<any>(null);
	const [elements, setElements] = useState(initialElements);
	const onLoad = (reactFlowInstance: any) => {
		setRfInstance(reactFlowInstance);
		const restoreFlow = async () => {
			const flow = (await store.getItem(key)) as any;
			if (flow) {
				setElements(flow.elements || []);
			}
		};
		restoreFlow();
	};

	const onSave = useCallback(() => {
		if (rfInstance) {
			const flow = rfInstance.toObject() as any;
			store.setItem(key, flow);
		}
	}, [rfInstance]);

	const onRestore = useCallback(() => {
		const restoreFlow = async () => {
			const flow = (await store.getItem(key)) as any;
			if (flow) {
				setElements(flow.elements || []);
			}
		};

		restoreFlow();
	}, [setElements]);

	const onAdd = useCallback(() => {
		const newNode = {
			id: getNodeId(),
			data: { label: 'Added node' },
			position: {
				x: Math.random() * window.innerWidth - 100,
				y: Math.random() * window.innerHeight,
			},
		};
		console.log('add');
		setElements((els) => els.concat(newNode));
	}, [setElements]);

	return (
		<ReactFlowProvider>
			<ReactFlow elements={elements} onLoad={onLoad} style={{ width: 500, height: 500 }}>
				<div className="save__controls">
					<button onClick={onSave}>save</button>
					<button onClick={onRestore}>restore</button>
					<button onClick={onAdd}>add node</button>
				</div>
			</ReactFlow>
		</ReactFlowProvider>
	);
};

export default SaveRestore;
