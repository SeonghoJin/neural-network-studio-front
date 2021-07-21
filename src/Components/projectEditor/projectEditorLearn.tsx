import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module';
import convertGraphBeforeRun from '../../core/GraphEngine';
import ProjectConfig from '../../core/project/config';
import { getPythonCodeThunk } from '../../module/Project/getPythonCode/thunks';
import { useEffect } from 'react';

const ProjectEditorLearn = () => {
  const location = useLocation();
  const projectNo = location.pathname.split('/')[2];
  const elements = useSelector((state: RootState) => (state.reactFlow.elements));
  const {error, data, loading} = useSelector((state: RootState) => (state.getPythonCode));
  const dispatch = useDispatch();

  const graph = convertGraphBeforeRun(elements);
  const config = new ProjectConfig();
  console.log(graph);
  useEffect(() => {
    dispatch(getPythonCodeThunk(graph, config));
  }, [])

  return (<>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {data && <span>{data}</span>}
  </>
);
}

export default ProjectEditorLearn;
