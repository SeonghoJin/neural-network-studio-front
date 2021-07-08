import ReactFlow, { Background, MiniMap } from 'react-flow-renderer';
import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  ReactFlowWrapper: {
    height: '100%',
    width: '100%',
  },
});

const TestReactFlow = () => {
  const classes = useStyle();
  const itemId = useRef(0);
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState([]);

  const getId = () => {
    const id = `node${itemId.current}`;
    itemId.current += 1;
    return id;
  };

  const onDragOver = (e : React.DragEvent) => {
    e.preventDefault();
    const localEvent = e;
    localEvent.dataTransfer.dropEffect = 'copy';
    console.log('onDragOver');
  };

  const onLoad = (instance : any) => (setReactFlowInstance(instance));

  const onDrop = (e : React.DragEvent) => {
    e.preventDefault();
    const localEvent = e;
    if (localEvent.dataTransfer.types.includes('application/reactflow')) {
      const type = localEvent.dataTransfer.getData(('application/reactflow'));
      console.log(type);
      const reactFlowBounds = (reactFlowWrapper.current as any).getBoundingClientRect();
      const position = (reactFlowInstance as any).project({
        x: localEvent.clientX - reactFlowBounds.left,
        y: localEvent.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };
      setElements((es) => es.concat(newNode as any));
    }
  };

  return (
    <div ref={reactFlowWrapper} className={classes.ReactFlowWrapper}>
      <ReactFlow elements={elements}
                 onDrop={onDrop}
                 onDragOver={onDragOver}
                 onLoad={onLoad}
      >
        <Background color="#aaa" />
      </ReactFlow>
      <MiniMap/>
    </div>
  );
};

export default TestReactFlow;
