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
  const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
  const location = useLocation();
  const projectNo = location.pathname.split('/')[2];
  const dispatch = useDispatch()

  useEffect(() => {
    if(action === ProjectControllerAction.GET_PROJECT) {
      dispatch(getProjectThunk(projectNo));
    }
    else if(action === ProjectControllerAction.PUT_PROJECT_CONTENT) {
      dispatch(updateProjectContentThunk(projectNo, {
        flowState: instance?.toObject(),
        output: "",
      }));
    }

    if(action !== null){
      dispatch(initProjectControllerAction());
    }
  }, [action, instance, location, projectNo]);

  return action;
}

export default useProjectController;
