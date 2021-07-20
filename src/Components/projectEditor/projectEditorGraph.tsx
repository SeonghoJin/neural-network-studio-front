import { Button, makeStyles } from '@material-ui/core';
import React, { KeyboardEventHandler, useCallback, useEffect , useRef, useState } from 'react';
import ReactFlow, {
  addEdge, Background,
  Connection, Controls,
  Edge,
  Elements, FlowElement, MiniMap,
  OnLoadParams,
  removeElements,
  useStoreState
} from 'react-flow-renderer';
import convertGraphBeforeRun from '../../core/GraphEngine';
import { getPythonCode, updateProjectContent } from '../../API/project';
import { useDispatch, useSelector } from 'react-redux';
import { setElements, setFlowInstance, setSelectedElements } from '../../module/ReactFlow';
import { useElementState } from '../../core/Context/ElementProvider/ElementProvider';
import { RootState } from '../../module';
import { BlockState } from '../../core/block/BlockState';
import { getNodeId } from '../../util';
import { nodetypes } from '../../core/nodetypes';
import localforage from 'localforage';
import { updateProjectThunk } from '../../module/Project/thunks';

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
})

const ProjectEditorGraph = () => {
  const classes = useStyle();
  const reactFlowWrapper = useRef(null);
  const selectedElements = useStoreState((state) => state.selectedElements);
  const {data, loading, error} = useSelector((state: RootState) => state.project);
  const elements = useSelector((state:RootState) => state.reactFlow.elements);
  const [reactFlowInstance, setReactFlowInstance] = useState<OnLoadParams | null>(null);
  const dispatch = useDispatch();

  const onSave = useCallback(() => {
    if(data != null && reactFlowInstance != null) {
      dispatch(updateProjectThunk(data.projectNo, {
        layers: reactFlowInstance.getElements(),
        output: "",
      } ));
    }
  }, [data, reactFlowInstance]);

  useEffect(() => {
    dispatch(setElements(data?.content?.layers || []));
  }, [])

  useEffect(() => {
    dispatch(setSelectedElements(selectedElements))
  }, [selectedElements])

  const onConnect = useCallback((params : Edge | Connection) => {
    dispatch(setElements(addEdge(params,elements)));
  }, [elements]);

  const onElementsRemove = (elementsToRemove : Elements<any>) => {
    dispatch(setElements(removeElements(elementsToRemove, elements)));
  };

  const onDragOver = (e : React.DragEvent) => {
    e.preventDefault();
    const localEvent = e;
    localEvent.dataTransfer.dropEffect = 'copy';
  };

  const onLoad = (instance : OnLoadParams) => {
    setReactFlowInstance(instance);
    dispatch(setFlowInstance(instance.toObject()));
  };

  const onDrop = (e : React.DragEvent) => {
    e.preventDefault();
    const localEvent = e;
    if (localEvent.dataTransfer.types.includes('application/nodedata')) {
      const nodedata = JSON.parse(localEvent.dataTransfer.getData(('application/nodedata'))) as BlockState;
      const reactFlowBounds = (reactFlowWrapper.current as any).getBoundingClientRect();
      const position = (reactFlowInstance as any).project({
        x: localEvent.clientX - reactFlowBounds.left,
        y: localEvent.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getNodeId(),
        type: 'default',
        position,
        data: {
          label: `${nodedata.type} node`,
          ...nodedata,
        },
      };
      const newElements = elements.concat(newNode);
      dispatch(setElements(newElements))
    }
  };

  const onKeyDown : KeyboardEventHandler = (event) => {
    if (event.code === 'Delete' && selectedElements) {
      onElementsRemove(selectedElements);
    }
  };

  return (
    <div ref={reactFlowWrapper} className={classes.wrapper}>
      <ReactFlow className={classes.reactFlow}
                 elements={elements}
                 onDrop={onDrop}
                 onDragOver={onDragOver}
                 onLoad={onLoad}
                 onConnect={onConnect}
                 onKeyDown={onKeyDown}
                 onElementsRemove={onElementsRemove}
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
          onClick={() => onSave()} >
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

