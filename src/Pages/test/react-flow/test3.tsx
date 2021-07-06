import ReactFlow, { Node, Edge } from 'react-flow-renderer';
import { nodetypes } from '../../../core/nodetypes';
import TestNode1 from '../../../core/nodetypes/test/TestNode1';
import { Position } from '../../../core/types';

const elements : Array<Node | Edge> = [
  new TestNode1('1', new Position(100, 300))
    .setData({
      text: 'Hello',
    }),
  new TestNode1('2', new Position(200, 400))
    .setData({
      text: 'World',
    }),
];

const CustomNodeExample = () => (
    <div style={{ height: 600 }}>
        <h1>Handle 테스트</h1>
        <ReactFlow elements={elements} nodeTypes={nodetypes} />
    </div>
);

export default CustomNodeExample;
