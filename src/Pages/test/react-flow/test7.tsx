import React, { useState, useRef } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
} from 'react-flow-renderer';

const Sidebar = () => {
  const onDragStart = (event : any, nodeType : any) => {
    const localEvent = event as React.DragEvent;
    localEvent.dataTransfer.setData('application/reactflow', nodeType);
    localEvent.dataTransfer.effectAllowed = 'copy';
    console.log('dragStart');
  };

  return (
        <aside>
            <div className="description">You can drag these nodes to the pane on the right.</div>
            <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                Input Node
            </div>
            <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
                Default Node
            </div>
            <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                Output Node
            </div>
        </aside>
  );
};

const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input node' },
    position: { x: 250, y: 5 },
  },
];

let id = 0;
const getId = () => {
  id += 1;
  return `dndnode_${id}`;
};

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const onConnect = (params : any) => setElements((els : any) => addEdge(params, els) as any);
  const onElementsRemove = (elementsToRemove : any) => {
    setElements((els : any) => removeElements(elementsToRemove, els) as any);
  };

  const onLoad = (_reactFlowInstance : any) => setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event : any) => {
    const localEvent = event as React.DragEvent;
    if (localEvent.dataTransfer.types.includes('application/reactflow')) {
      event.preventDefault();
      localEvent.dataTransfer.dropEffect = 'copy';
      console.log('dragOver');
    }
  };

  const onDrop = (event : any) => {
    event.preventDefault();
    console.log('drop');
    const reactFlowBounds = (reactFlowWrapper.current as any).getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = (reactFlowInstance as any).project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: getId(),
      type,
      position,
      data: { label: `${type} node` },
    };

    setElements((es) => es.concat(newNode));
  };

  return (
        <div className="dndflow" >
            <ReactFlowProvider >
                <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                    <ReactFlow
                        className={'droparea'}
                        style={{ height: 600 }}
                        elements={elements}
                        onConnect={onConnect}
                        onElementsRemove={onElementsRemove}
                        onLoad={onLoad}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                    >
                        <Controls />
                    </ReactFlow>
                </div>
                <Sidebar />
            </ReactFlowProvider>
        </div>
  );
};

export default DnDFlow;
