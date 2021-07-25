import { ProjectProps } from './type';
import {
  initProjectControllerAction,
  ProjectControllerAction
} from '../../module/ProjectController';
import { RootDispatch, RootState } from '../../module';
import {
  getProjectConfigThunk,
  getProjectThunk,
  getPythonCodeThunk, putProjectConfigThunk,
  putProjectInfoThunk, updateProjectContentThunk
} from '../../module/API/project/thunks';
import { useDispatch, useSelector } from 'react-redux';
import useGetProjectResult from '../../hooks/useGetProjectResult';
import useProjectInfo from '../../hooks/useProjectInfo';
import useProjectConfig from '../../hooks/useProjectConfig';
import { useEffect } from 'react';

const useProjectController = async (props : ProjectProps) => {
  const action = useSelector((state : RootState) => (state.projectController.action));
  const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
  const getProjectResult = useGetProjectResult();
  const [projectConfig] = useProjectConfig();
  const [projectInfo] = useProjectInfo();
  const thunkDispatch : RootDispatch = useDispatch();
  const dispatch = useDispatch();
  const projectNo = (props.match?.params?.projectNo || '0');
  useEffect(() => {
    if(action === ProjectControllerAction.GET_PROJECT) {
      thunkDispatch(getProjectThunk(projectNo));
    }
    else if(action === ProjectControllerAction.GET_PROJECT_CONFIG){
      thunkDispatch(getProjectConfigThunk(projectNo));
    }
    else if(action === ProjectControllerAction.PUT_PROJECT_CONTENT) {
      const exec = async () => {
        await thunkDispatch(updateProjectContentThunk(
          projectNo, "", instance?.toObject() || getProjectResult.data?.content.flowState)
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
    else if(action === ProjectControllerAction.PUT_PROJECT_CONFIG_AND_INFO){
      const exec = async () => {
        if(projectInfo.name != null && projectInfo.description != null)
        thunkDispatch(putProjectInfoThunk(
          projectNo, projectInfo.name, projectInfo.description
        )).then(async (res) => {
          if(res){
            return await thunkDispatch(putProjectConfigThunk(projectNo, projectConfig))
          }
          return false
        }).then(async (res) => {
          if(res) {
            thunkDispatch(getProjectThunk(projectNo));
            thunkDispatch(getProjectConfigThunk(projectNo));
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
