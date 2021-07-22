import ProjectEditorGraph from './projectEditorGraph';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module';
import { useCallback } from 'react';
import { setReactFlowInstance } from '../../module/ReactFlowInstance';
import { OnLoadParams } from 'react-flow-renderer';
import CircleLoading from '../Loading/CircularLoading';
import StandardModal from '../modal/StandardModal';

const ProjectEditorGraphContainer = () => {
  const {data, loading, error} = useSelector((state: RootState) => state.projectApi.getProjectResult);
  const dispatch = useDispatch();

  const setReactInstance = useCallback((instance : OnLoadParams) => {
    dispatch(setReactFlowInstance(instance));
  }, []);

  const content = data && (
      <ProjectEditorGraph
        setReactInstance={setReactInstance}
        flowState={data?.content.flowState}
      />
  );

  return(
    <>
      {loading && <CircleLoading/>}
      {error && <StandardModal head={Error} body={error}/>}
      {content}
    </>);
};

export default ProjectEditorGraphContainer;
