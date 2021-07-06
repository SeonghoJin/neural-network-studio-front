import React from 'react';
import ReactFlow, {
  Node, Edge, XYPosition, ElementId,
} from 'react-flow-renderer';

class CustomNode implements Node {
  id: ElementId;

  data : any;

  position: XYPosition;

  constructor(id : ElementId, positon : XYPosition, data : any) {
    this.id = id;
    this.data = data;
    this.position = positon;
  }
}

const elements : Array<Node | Edge> = [
  new CustomNode('6', { x: 50, y: 30 }, '12315'),
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output', // output node
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
  // animated edge
  {
    id: 'e1-2', source: '1', target: '2', animated: true,
  },
  { id: 'e2-3', source: '3', target: '2' },
];

export default () => (
    <div style={{ height: 300 }}>
      <h1>기본 예제</h1>
        <ReactFlow elements={elements}/>
    </div>
);
