import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module';
import { useLocation } from 'react-router-dom';
import {
  initProjectControllerAction,
  ProjectControllerAction
} from '../../module/ProjectController';
import { getProjectThunk, updateProjectContentThunk } from '../../module/API/project/thunks';
import { useCallback, useEffect } from 'react';

const useProjectController = async () => {
  const action = useSelector((state : RootState) => (state.projectController.action));
  const instance = useSelector((state: RootState) => state.reactFlowInstance);
  const location = useLocation();
  const projectNo = location.pathname.split('/')[2];
  const dispatch = useDispatch()

  const callback = useCallback(() => {
    if(action === ProjectControllerAction.GET_PROJECT) {
      dispatch(getProjectThunk(projectNo));
    }
    else if(action === ProjectControllerAction.PUT_PROJECT_CONTENT) {
      if(instance.instance != null){
        dispatch(updateProjectContentThunk(projectNo, {
          output: "",
          flowState: instance.instance.toObject(),
        }));
      }
    }

    if(action !== null){
      dispatch(initProjectControllerAction());
    }
  }, [action, instance, location, projectNo]);

  useEffect(() => {
    callback();
  }, [action])

  return action;
}

export default useProjectController;
