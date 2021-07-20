import {
  addEdge,
  Connection,
  Edge,
  Elements, OnLoadParams,
  ReactFlowProvider,
  removeElements,
  Node
} from 'react-flow-renderer';
import ProjectEditorGraph from './projectEditorGraph';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module';
import { useCallback, useEffect } from 'react';
import { setElements, setFlowInstance, setSelectedElements } from '../../module/ReactFlow';
import { updateProjectThunk } from '../../module/Project/thunks';

const ProjectEditorGraphContainer = () => {
  const {data, loading, error} = useSelector((state: RootState) => state.project);
  const flowState = useSelector((state: RootState) => state.reactFlow);
  const dispatch = useDispatch();

  useEffect(() => {
    if(data){
      setFlowInstance(data.content.flowState);
    }
  },[data]);

  const onChangedSelectedElement = useCallback((selectedElement) => {
    dispatch(setSelectedElements(selectedElement));
  }, [flowState]);

  const onConnect = useCallback((params : Edge | Connection) => {
    dispatch(setElements(addEdge(params, flowState.elements)));
  }, [flowState]);

  const onElementsRemove = useCallback((elementsToRemove : Elements<any>) => {
    dispatch(setElements(removeElements(elementsToRemove, flowState.elements)));
  }, [flowState]);

  const onSave = useCallback((flowInstance: OnLoadParams) => {
      if(data != null){
      dispatch(updateProjectThunk(data.projectNo, {
        output: "",
        flowState: {
          ...flowInstance.toObject(),
          selectedElement: null,
        }
      }))
    }
  }, [flowState])

  const onDrop = useCallback((e: DragEvent) => {
    return (callback : (e : DragEvent) => Node | null) => {
      const node : Node | null = callback(e);
      if(node){
        dispatch(setElements(flowState.elements.concat(node)));
      }
    }
  }, [flowState])


  return <ReactFlowProvider>
    <ProjectEditorGraph
      flowState={flowState}
      onChangeSelectedElement={onChangedSelectedElement}
      onConnect={onConnect}
      onElementRemove={onElementsRemove}
      onSave={onSave}
      onDrop={onDrop}
    />
  </ReactFlowProvider>
}

export default ProjectEditorGraphContainer;
