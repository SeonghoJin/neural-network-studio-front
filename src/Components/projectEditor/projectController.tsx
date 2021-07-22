import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '../../module';
import { useLocation } from 'react-router-dom';
import {
  initProjectControllerAction,
  ProjectControllerAction
} from '../../module/ProjectController';
import {
  getProjectThunk,
  getPythonCodeThunk,
  updateProjectContentThunk
} from '../../module/API/project/thunks';
import { useEffect } from 'react';
const useProjectController = async () => {
  const action = useSelector((state : RootState) => (state.projectController.action));
  const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
  const location = useLocation();
  const projectNo = location.pathname.split('/')[2];
  const thunkDispatch : RootDispatch = useDispatch();
  const dispatch = useDispatch();
  useEffect(() => {
    if(action === ProjectControllerAction.GET_PROJECT) {
      dispatch(getProjectThunk(projectNo));
    }
    else if(action === ProjectControllerAction.PUT_PROJECT_CONTENT) {
      const exec = async () => {
        await thunkDispatch(updateProjectContentThunk(
          projectNo, "", instance?.toObject())
        ).then(async (res) => {
          if(res){
            await thunkDispatch(getProjectThunk(projectNo));
          }
        });
      }
      exec();
    }
    else if(action === ProjectControllerAction.GET_PYTHON_CODE) {
      const exec = async () => {
        await thunkDispatch(updateProjectContentThunk(
          projectNo, "", instance?.toObject()
        )).then(async (res) => {
          if(res){
            thunkDispatch(getProjectThunk(projectNo));
            thunkDispatch(getPythonCodeThunk(projectNo));
          }
        })
      }
      exec();
    }

    if(action !== null){
      dispatch(initProjectControllerAction());
    }
  }, [action]);

  return action;
}

export default useProjectController;
