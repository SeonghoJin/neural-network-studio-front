import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import TestNode1 from './TestNode1';

const testNode1Styles = {
	background: '#000000',
	color: '#FFFFFF',
};

const TestNode1Component = (props: TestNode1) => (
	<div style={testNode1Styles}>
		<Handle type="target" position={Position.Left} style={{ borderRadius: 0 }} />
		<Handle type="source" position={Position.Left} id="a" style={{ top: '30%', borderRadius: 0 }} />
		<Handle type="source" position={Position.Right} id="b" style={{ top: '70%', borderRadius: 0 }} />
	</div>
);

export default TestNode1Component;
