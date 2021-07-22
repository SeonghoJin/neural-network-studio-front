import ProjectEditorGraph from './projectEditorGraph';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module';
import { useCallback, useEffect } from 'react';
import { setReactFlowInstance } from '../../module/ReactFlowInstance';
import { OnLoadParams } from 'react-flow-renderer';

const ProjectEditorGraphContainer = () => {
  const {data, loading, error} = useSelector((state: RootState) => state.projectApi.getProjectResult);
  const dispatch = useDispatch();

  const setReactInstance = useCallback((instance : OnLoadParams) => {
    dispatch(setReactFlowInstance(instance));
  }, [])

  const content = data && (
      <ProjectEditorGraph
        setReactInstance={setReactInstance}
        flowState={data?.content.flowState}
      />
  );

  return(
    <>
      {loading && <span>loading...</span>}
      {error && <span>{error}</span>}
      {content}
    </>)
}

export default ProjectEditorGraphContainer;
