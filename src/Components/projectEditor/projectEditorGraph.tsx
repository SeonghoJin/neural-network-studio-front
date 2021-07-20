import { Button, makeStyles } from '@material-ui/core';
import React, { KeyboardEventHandler, useCallback, useEffect , useRef, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  OnLoadParams,
  useStoreState,
  Node,
} from 'react-flow-renderer';
import convertGraphBeforeRun from '../../core/GraphEngine';
import { getPythonCode, updateProjectContent } from '../../API/project';
import { useDispatch, useSelector } from 'react-redux';
import {
  ReactFlowState,
  setElements,
} from '../../module/ReactFlow';
import { BlockState } from '../../core/block/BlockState';
import { getNodeId } from '../../util';
import { nodetypes } from '../../core/nodetypes';
import localforage from 'localforage';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
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

interface PrjectEditorGrahpProps{
  flowState: ReactFlowState
  onChangeSelectedElement: any
  onConnect: any
  onSave: any
  onElementRemove: any
  onDrop: any
};

const ProjectEditorGraph = (props: PrjectEditorGrahpProps) => {
  const classes = useStyle();
  const {flowState, onChangeSelectedElement, onElementRemove, onConnect, onSave, onDrop} = props;
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<null | OnLoadParams>(null);
  const selectedElements = useStoreState((state) => state.selectedElements);

  useEffect(() => {
    onChangeSelectedElement(selectedElements)
  }, [selectedElements])

  const onDragOver = (e : React.DragEvent) => {
    e.preventDefault();
    const localEvent = e;
    localEvent.dataTransfer.dropEffect = 'copy';
  };

  const onDropCallback = (e : React.DragEvent) => {
    e.preventDefault();
    const localEvent = e;
    if (localEvent.dataTransfer.types.includes('application/nodedata')) {
      const nodedata = JSON.parse(localEvent.dataTransfer.getData(('application/nodedata'))) as BlockState;
      const reactFlowBounds = (reactFlowWrapper.current as any).getBoundingClientRect();
      const position = (reactFlowInstance as any).project({
        x: localEvent.clientX - reactFlowBounds.left,
        y: localEvent.clientY - reactFlowBounds.top,
      });
      const newNode : Node = {
        id: getNodeId(),
        type: 'default',
        position,
        data: {
          label: `${nodedata.type} node`,
          ...nodedata,
        },
      };
      return newNode;
    }
    return null;
  };

  const onLoad = useCallback((instance: OnLoadParams) => {
    setReactFlowInstance(instance);
  }, []);

  const onKeyDown : KeyboardEventHandler = useCallback((event) => {
    if (event.code === 'Delete' && selectedElements) {
      onElementRemove(selectedElements);
    }
  }, [selectedElements]);

  return (
    <div ref={reactFlowWrapper} className={classes.wrapper}>
      <ReactFlow className={classes.reactFlow}
                 elements={flowState.elements}
                 onDrop={(e) => {onDrop(e)(onDropCallback)}}
                 onDragOver={onDragOver}
                 onLoad={onLoad}
                 onConnect={onConnect}
                 onKeyDown={onKeyDown}
                 onElementsRemove={onElementRemove}
                 tabIndex={0}
                 nodeTypes={nodetypes}
      >
        <Controls style={{
          top: 10,
          left: 10,
          bottom: 'initial',
        }}/>
        <Button
          className={classes.saveButton}
          onClick={() => {onSave(reactFlowInstance)}}
          >
          Save
        </Button>
        <Button className={classes.runButton}>
          Run
        </Button>
        <MiniMap
                 nodeStrokeColor={(n) => {
                   if (n.type === 'input') return '#0041d0';
                   if (n.type === 'selectorNode') return '#1A192B';
                   if (n.type === 'output') return '#ff0072';
                   return '#000000';
                 }}
                 nodeColor={(n) => {
                   if (n.type === 'selectorNode') return '#1A192B';
                   return '#000000';
                 }}
        />
        <Background color="#aaa" />
      </ReactFlow>
    </div>
  );
}

export default ProjectEditorGraph;

