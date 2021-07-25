import ProjectEditorGraph from './projectEditorGraph';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { setReactFlowInstance } from '../../../module/ReactFlowInstance';
import { Elements, OnLoadParams } from 'react-flow-renderer';
import CircleLoading from '../../Loading/CircularLoading';
import { setElements } from '../../../module/Elements';
import useGetProjectResult from '../../../hooks/useGetProjectResult';

const ProjectEditorGraphContainer = () => {
  const result = useGetProjectResult();
  const dispatch = useDispatch();

  const setReactInstance = useCallback((instance : OnLoadParams) => {
    dispatch(setReactFlowInstance(instance));
  }, []);

  const onSetElements = useCallback((elements: Elements) => {
    dispatch(setElements(elements));
  }, [])

  const content = result.data && (
      <ProjectEditorGraph
        setReactInstance={setReactInstance}
        flowState={result.data?.content.flowState}
        setElements={onSetElements}
      />
  );

  return(
    <>
      {(result.loading || result.error) && <CircleLoading/>}
      {content}
    </>);
};


export default ProjectEditorGraphContainer;
