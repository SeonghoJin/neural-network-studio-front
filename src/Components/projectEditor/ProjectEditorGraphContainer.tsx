import ProjectEditorGraph from './projectEditorGraph';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module';
import { useCallback, useEffect } from 'react';
import { setReactFlowInstance } from '../../module/ReactFlowInstance';
import { Elements, OnLoadParams } from 'react-flow-renderer';
import CircleLoading from '../Loading/CircularLoading';
import StandardModal from '../modal/StandardModal';
import { getProject } from '../../module/ProjectController';
import { setElements } from '../../module/Elements';

const ProjectEditorGraphContainer = () => {
  const {data, loading, error} = useSelector((state: RootState) => state.projectApi.getProjectResult);
  const saveResult = useSelector((state: RootState) => state.projectApi.putProjectContentResult);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProject());
  }, []);

  useEffect(() => {
    if(saveResult.result?.check === true){
      dispatch(getProject());
    }
  }, [saveResult.result?.check]);

  const setReactInstance = useCallback((instance : OnLoadParams) => {
    dispatch(setReactFlowInstance(instance));
  }, []);

  const onSetElements = useCallback((elements: Elements) => {
    dispatch(setElements(elements));
  }, [])

  const content = data && (
      <ProjectEditorGraph
        setReactInstance={setReactInstance}
        flowState={data?.content.flowState}
        setElements={onSetElements}
      />
  );

  const handleError = useCallback(() => {
    window.location.replace('/project');
  }, [])

  return(
    <>
      {(saveResult.error) && <StandardModal head={'에러'} body={saveResult.error} onClose={handleError}/>}
      {(error) && <StandardModal head={'에러'} body={error}/>}
      {(loading || error) && <CircleLoading/>}
      {content}
    </>);
};


export default ProjectEditorGraphContainer;
