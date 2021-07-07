import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import TestNode2 from './TestNode2';

const testNode2Styles = {
  'border-radius': '30px',
  background: '#FFFFFF',
  height: '100px',
  width: '100px',
};

const TestNode1Component = (props : TestNode2) => (
  <div style={testNode2Styles} onClick={props.data?.onClick}>
        <Handle type="target" position={Position.Left} style={{ borderRadius: 0 }}/>
        <div>{props.data?.text}</div>
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

export default TestNode1Component;
