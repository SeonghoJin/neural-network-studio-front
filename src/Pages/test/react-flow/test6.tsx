import React, { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';

const initialElements = [
	{
		id: '1',
		data: { label: '-' },
		position: {
			x: 100,
			y: 100,
		},
	},
	{
		id: '2',
		data: { label: 'Node 2' },
		position: {
			x: 100,
			y: 200,
		},
	},
	{
		id: 'e1-2',
		source: '1',
		target: '2',
	},
];

const UpdateNode = () => {
	const [elements, setElements] = useState(initialElements);
	const [nodeName, setNodeName] = useState('Node 1');
	const [nodeBg, setNodeBg] = useState('#eee');
	const [nodeHidden, setNodeHidden] = useState(false);

	useEffect(() => {
		setElements((els: any) =>
			els.map((el: any) => {
				if (el.id === '1') {
					// eslint-disable-next-line no-param-reassign
					el.data = {
						...el.data,
						label: nodeName,
					};
				}
				return el;
			})
		);
	}, [nodeName]);

	useEffect(() => {
		setElements((els) =>
			els.map((el: any) => {
				if (el.id === '1') {
					// eslint-disable-next-line no-param-reassign
					el.style = {
						...el.style,
						backgroundColor: nodeBg,
					};
				}

				return el;
			})
		);
	}, [nodeBg]);

	useEffect(() => {
		setElements((els) => {
			return els.map((el: any) => {
				if (el.id === '1' || el.id === 'e1-2') {
					// eslint-disable-next-line no-param-reassign
					el.el = nodeHidden;
				}

				return el;
			});
		});
	}, [nodeHidden]);

	return (
		<>
			<div className="updatenode__controls">
				{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
				<label>
					lllabel:
					<input value={nodeName} onChange={(evt) => setNodeName(evt.target.value)} />
				</label>
				{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
				<label className="updatenode__bglabel">background:</label>
				<input value={nodeBg} onChange={(evt) => setNodeBg(evt.target.value)} />
				<div className="updatenode__checkboxwrapper">
					{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
					<label>hidden:</label>
					<input type="checkbox" checked={nodeHidden} onChange={(evt) => setNodeHidden(evt.target.checked)} />
				</div>
				<h1>Update Node Example</h1>
			</div>
			{/* eslint-disable-next-line max-len */}
			<ReactFlow style={{ height: 600 }} elements={elements} defaultZoom={1.5} minZoom={0.2} maxZoom={4} />
		</>
	);
};

export default UpdateNode;
