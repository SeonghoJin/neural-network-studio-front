import { Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module';
import { updateProjectThunk } from '../../module/Project/thunks';
import { useEffect } from 'react';

const ProjectEditorSave = () => {
  const location = useLocation();
  const projectNo = location.pathname.split('/')[2];
  const flowState = useSelector((state : RootState) => (state.reactFlow));
  const dispatch =  useDispatch();
  const {error, data, loading} = useSelector((state : RootState) => state.project);

  useEffect(() => {dispatch(updateProjectThunk(projectNo, {
    output: "",
    flowState: {
      ...flowState
    }
  }))}, [flowState]);
  console.log(data, error, loading);
  return <>
    {loading && <span>로딩중...</span>}
    {error && <span>{error}</span>}
    {data && <Redirect to={`/project/${projectNo}`}></Redirect>}
  </> }

export default ProjectEditorSave;
