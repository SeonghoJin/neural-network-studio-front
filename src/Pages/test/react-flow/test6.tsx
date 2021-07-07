import React, { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';

const initialElements = [
  { id: '1', data: { label: '-' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 200 } },
  { id: 'e1-2', source: '1', target: '2' },
];

const UpdateNode = () => {
  const [elements, setElements] = useState(initialElements);
  const [nodeName, setNodeName] = useState('Node 1');
  const [nodeBg, setNodeBg] = useState('#eee');
  const [nodeHidden, setNodeHidden] = useState(false);

  useEffect(() => {
    setElements((els: any) => els.map((el : any) => {
      if (el.id === '1') {
        // eslint-disable-next-line no-param-reassign
        el.data = {
          ...el.data,
          label: nodeName,
        };
      }
      return el;
    }));
  }, [nodeName, setElements]);

  useEffect(() => {
    setElements((els) => els.map((el) => {
      if (el.id === '1') {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        el.style = { ...el.style, backgroundColor: nodeBg };
      }

      return el;
    }));
  }, [nodeBg, setElements]);

  useEffect(() => {
    setElements((els) => els.map((el) => {
      if (el.id === '1' || el.id === 'e1-2') {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        el.isHidden = nodeHidden;
      }

      return el;
    }));
  }, [nodeHidden, setElements]);

  return (
      <>
      <div className="updatenode__controls">
          <label>label:</label>
          <input
              value={nodeName}
              onChange={(evt) => setNodeName(evt.target.value)}
          />
          <label className="updatenode__bglabel">background:</label>
          <input value={nodeBg} onChange={(evt) => setNodeBg(evt.target.value)} />
          <div className="updatenode__checkboxwrapper">
              <label>hidden:</label>
              <input
                  type="checkbox"
                  checked={nodeHidden}
                  onChange={(evt) => setNodeHidden(evt.target.checked)}
              />
          </div>
          <h1>Update Node Example</h1>
      </div>
          {/* eslint-disable-next-line max-len */}
    <ReactFlow style={{ height: 600 }} elements={elements} defaultZoom={1.5} minZoom={0.2} maxZoom={4}>
    </ReactFlow>
          </>);
};

export default UpdateNode;
