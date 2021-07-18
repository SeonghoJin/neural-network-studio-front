import ReactFlow, {
  addEdge,
  Background,
  Connection,
  Controls,
  Edge,
  Elements, FlowExportObject,
  OnLoadParams,
  removeElements,
  useStoreState,
  useZoomPanHelper,
} from 'react-flow-renderer';
import React, {
  KeyboardEventHandler, useCallback, useRef, useState,
} from 'react';
import { Button, makeStyles } from '@material-ui/core';
import localforage from 'localforage';
import {
  useElementDispatch,
  useElementState,
} from '../../../core/Context/ElementProvider/ElementProvider';
import { getNodeId } from '../../../util';
import ElementsStorage from '../../../Storage/ElementsStorage';
import { BlockState } from '../../../core/block/BlockState';
import convertGraphBeforeRun from '../../../core/GraphEngine';

const useStyle = makeStyles({
  ReactFlowWrapper: {
    flexGrow: 1,
  },
  reactFlow: {
    '&:focus': {
      border: 'initial',
    },
  },
  runButton: {
    position: 'absolute',
    zIndex: 1000,
    top: 10,
    left: 110,
    backgroundColor: '#F7F7F7',
  },
  saveButton: {
    position: 'absolute',
    zIndex: 1000,
    top: 10,
    left: 40,
    backgroundColor: '#F7F7F7',
  },
});

localforage.config({
  name: 'flowInstance',
  storeName: 'TransitionStore',
});

const TransitionKey = 'TrnasitionKey';
const TestReactFlow = () => {
  const classes = useStyle();
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<OnLoadParams | null>(null);
  const selectedElements = useStoreState((state) => state.selectedElements);
  const elements = useElementState();
  const elementsDispatch = useElementDispatch();
  const { transform } = useZoomPanHelper();

  const onSave = useCallback(() => {
    if (reactFlowInstance) {
      const flow = reactFlowInstance.toObject();
      localforage.setItem(TransitionKey, flow);
      elementsDispatch({
        type: 'renew',
        payLoad: flow.elements,
      });
    }
  }, [reactFlowInstance]);

  const onRun = () => {
    convertGraphBeforeRun(elements);
  };

  const onElementsRemove = (elementsToRemove : Elements<any>) => {
    elementsDispatch({
      type: 'renew',
      payLoad: removeElements(elementsToRemove, elements),
    });
  };
  const onConnect = (params : Edge | Connection) => {
    elementsDispatch({
      type: 'renew',
      payLoad: addEdge(params, elements),
    });
  };

  const onDragOver = (e : React.DragEvent) => {
    e.preventDefault();
    const localEvent = e;
    localEvent.dataTransfer.dropEffect = 'copy';
  };

  const onLoad = (instance : OnLoadParams) => {
    setReactFlowInstance(instance);
    const restoreElements = async () => {
      const restoredElements = await (ElementsStorage.getElements());
      if (restoredElements) {
        elementsDispatch({
          type: 'renew',
          payLoad: restoredElements,
        });
        instance.fitView();
      }
    };

    const restoreFlow = async () => {
      const flow = (await localforage.getItem(TransitionKey)) as FlowExportObject;

      if (flow) {
        const [x = 0, y = 0] = flow.position;
        transform({ x, y, zoom: flow.zoom || 0 });
      }
    };
    restoreFlow();
    restoreElements();
  };

  const onDrop = (e : React.DragEvent) => {
    e.preventDefault();
    const localEvent = e;
    if (localEvent.dataTransfer.types.includes('application/nodetype')) {
      const type = localEvent.dataTransfer.getData(('application/nodetype'));
      const data = JSON.parse(localEvent.dataTransfer.getData(('application/nodedata'))) as BlockState;
      const reactFlowBounds = (reactFlowWrapper.current as any).getBoundingClientRect();
      const position = (reactFlowInstance as any).project({
        x: localEvent.clientX - reactFlowBounds.left,
        y: localEvent.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getNodeId(),
        type,
        position,
        data: {
          label: `${type} node`,
          ...data,
        },
      };
      const newElements = elements.concat(newNode);
      elementsDispatch({
        type: 'renew',
        payLoad: newElements,
      });
    }
  };

  const onKeyDown : KeyboardEventHandler = (event) => {
    if (event.code === 'Delete' && selectedElements) {
      onElementsRemove(selectedElements);
    }
  };
  return (
    <div ref={reactFlowWrapper} className={classes.ReactFlowWrapper}>
      <ReactFlow className={classes.reactFlow}
                 elements={elements}
                 onDrop={onDrop}
                 onDragOver={onDragOver}
                 onLoad={onLoad}
                 onConnect={onConnect}
                 onKeyDown={onKeyDown}
                 onElementsRemove={onElementsRemove}
                 tabIndex={0}
      >
        <Controls style={{
          top: 10,
          left: 10,
          bottom: 'initial',
        }}/>
        <Button onClick={onSave} className={classes.saveButton}>
          Save
        </Button>
        <Button onClick={onRun} className={classes.runButton}>
          Run
        </Button>
        <Background color="#aaa" />
      </ReactFlow>
    </div>
  );
};

export default TestReactFlow;
