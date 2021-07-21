import { Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module';
import { useEffect } from 'react';
import { useStoreState, useZoomPanHelper } from 'react-flow-renderer';
import { updateProjectContentThunk } from '../../module/Project/API/thunks';

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
        flowState: {
          selectedElement: null,
          ...flowState.instance.toObject()
        }
      }))
    }
  }, [flowState]);


  return <>
    {result?.check && window.location.replace(`/project/${projectNo}`)}
  </> }

export default ProjectEditorSave;
