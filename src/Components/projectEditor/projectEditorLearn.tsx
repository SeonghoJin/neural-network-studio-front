import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module';
import { useEffect } from 'react';
import { getPythonCodeThunk } from '../../module/API/thunks';

const ProjectEditorLearn = () => {
  const location = useLocation();
  const projectNo = location.pathname.split('/')[2];
  const {error, data, loading} = useSelector((state: RootState) => (state.api.getPythonCodeResult));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPythonCodeThunk(projectNo));
  }, [])

  return (<>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {data && <span>{data}</span>}
  </>
);
}

export default ProjectEditorLearn;
