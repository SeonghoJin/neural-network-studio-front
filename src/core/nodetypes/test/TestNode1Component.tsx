import React from 'react';
import { Handle, Position } from 'react-flow-renderer';

interface TestNodeProps {
    data : string;
}

const testNode1Styles = {
  background: '#000000',
  color: '#FFFFFF',
};

const testNode2Styles = {
  background: '#1aa35c',
  color: '#FFFFFF',
};

const testNode3Styles = {
  background: '#FFFFAB',
  color: '#000000',
};

// eslint-disable-next-line import/prefer-default-export
export const TestNode1Component = (props : TestNodeProps) => (
    <div style={testNode1Styles}>
        <Handle type="target" position={Position.Left} style={{ borderRadius: 0 }} />
        <div>{props.data}</div>
        <Handle
            type="source"
            position={Position.Left}
            id="a"
            style={{ top: '30%', borderRadius: 0 }}
        />
        <Handle
            type="source"
            position={Position.Right}
            id="b"
            style={{ top: '70%', borderRadius: 0 }}
        />
    </div>
);
