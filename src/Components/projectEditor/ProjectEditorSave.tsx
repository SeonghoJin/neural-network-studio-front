import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module';
import { useEffect } from 'react';
import { updateProjectContentThunk } from '../../module/API/project/thunks';

const ProjectEditorSave = () => {
  const location = useLocation();
  const projectNo = location.pathname.split('/')[2];
  const flowState = useSelector((state : RootState) => (state.reactFlowInstance));
  const {error, result, loading} = useSelector((state : RootState) => state.api.putProjectContentResult);
  const dispatch =  useDispatch();

  useEffect(() => {
    if(flowState.instance != null){
      console.log(flowState.instance.toObject());
      dispatch(updateProjectContentThunk(projectNo, {
        output: "",
        flowState: flowState.instance.toObject()
      }))
    }
  }, [flowState]);


  return <>
    {error && <span>error</span>}
    {loading && <span>loading...</span>}
    {result?.check && window.location.replace(`/project/${projectNo}`)}
  </> }

export default ProjectEditorSave;
