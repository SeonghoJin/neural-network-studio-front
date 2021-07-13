import ReactFlow, {
  Background, Controls,
} from 'react-flow-renderer';
import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import {
  useElementDispatch,
  useElementState,
} from '../../../core/Context/ElementProvider/ElementProvider';
import { getNodeId } from '../../../util';
import ElementsStorage from '../../../Storage/ElementsStorage';

const useStyle = makeStyles({
  ReactFlowWrapper: {
    flexGrow: 1,
  },
});

const TestReactFlow = () => {
  const classes = useStyle();
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const elements = useElementState();
  const elementsDispatch = useElementDispatch();

  const onDragOver = (e : React.DragEvent) => {
    e.preventDefault();
    const localEvent = e;
    localEvent.dataTransfer.dropEffect = 'copy';
  };

  const onLoad = (instance : any) => {
    setReactFlowInstance(instance);
    const restoreElements = async () => {
      const restoredElements = await (ElementsStorage.getElements());
      if (restoredElements) {
        elementsDispatch({
          type: 'renew',
          payLoad: restoredElements,
        });
      }
    };

    restoreElements();
  };

  const onDrop = (e : React.DragEvent) => {
    e.preventDefault();
    const localEvent = e;
    if (localEvent.dataTransfer.types.includes('application/reactflow')) {
      const type = localEvent.dataTransfer.getData(('application/reactflow'));
      const reactFlowBounds = (reactFlowWrapper.current as any).getBoundingClientRect();
      const position = (reactFlowInstance as any).project({
        x: localEvent.clientX - reactFlowBounds.left,
        y: localEvent.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getNodeId(),
        type,
        position,
        data: { label: `${type} node` },
      };
      const newElements = elements.concat(newNode);
      elementsDispatch({
        type: 'renew',
        payLoad: newElements,
      });
      ElementsStorage.setElements(newElements);
    }
  };

  return (
    <div ref={reactFlowWrapper} className={classes.ReactFlowWrapper}>
      <ReactFlow elements={elements}
                 onDrop={onDrop}
                 onDragOver={onDragOver}
                 onLoad={onLoad}
      >
        <Controls style={{
          top: 10,
          left: 10,
          bottom: 'initial',
        }}/>
        <Background color="#aaa" />
      </ReactFlow>
    </div>
  );
};

export default TestReactFlow;
