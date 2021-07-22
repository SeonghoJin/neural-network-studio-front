import { useDispatch, useSelector } from 'react-redux';
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
import { RootDispatch, RootState } from '../../module';
import { ProjectProps } from './type';
const useProjectController = async (props : ProjectProps) => {
  const action = useSelector((state : RootState) => (state.projectController.action));
  const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
  const projectNo = (props.match?.params?.projectNo || '0');
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
