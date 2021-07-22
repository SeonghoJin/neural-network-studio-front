import ProjectEditorGraph from './projectEditorGraph';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../module';
import { useCallback, useEffect } from 'react';
import { setReactFlowInstance } from '../../../module/ReactFlowInstance';
import { Elements, OnLoadParams } from 'react-flow-renderer';
import CircleLoading from '../../Loading/CircularLoading';
import StandardModal from '../../modal/StandardModal';
import { getProject } from '../../../module/ProjectController';
import { setElements } from '../../../module/Elements';
import useGetProjectResult from '../../../hooks/useGetProjectResult';

const ProjectEditorGraphContainer = () => {
  const result = useGetProjectResult();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProject());
  }, []);


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
