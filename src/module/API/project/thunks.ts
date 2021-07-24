import { RootState } from '../../index';
import { ProjectAPIActionTypes } from './types';
import { ThunkAction } from 'redux-thunk';
import {
  getProjectAsync,
  getProjectConfigAsync,
  getPythonCodeAsync, putProjectConfigAsync,
  putProjectContentAsync, putProjectInfoAsync
} from './actions';
import {
  getProject,
  getProjectConfig,
  getPythonCode, updateProjectConfig,
  updateProjectContent, updateProjectInfo
} from '../../../API/project';
import { FlowExportObject } from 'react-flow-renderer';
import { IProjectConfig } from '../../../core/project/config';

export function updateProjectContentThunk(
  projectNo: string , output: string, flowState?: FlowExportObject)
: ThunkAction<Promise<boolean>, RootState, null, ProjectAPIActionTypes>{
  return async dispatch => {
    const {request, success, failure} = putProjectContentAsync;
    dispatch(request());
      try{
        if(flowState == null){
          await setTimeout(() => {}, 0);
          throw new Error("잘못된 저장입니다");
        }
        await updateProjectContent(projectNo, {
          output:output,
          flowState:flowState,
        });
        dispatch(success());
        return true;
      }catch (e) {
        dispatch(failure(e.message));
        return false;
      }
  }
}

export function getProjectThunk(projectNo: string): ThunkAction<
  Promise<boolean>, RootState, null, ProjectAPIActionTypes>{
  return async dispatch => {
    const {request, success, failure} = getProjectAsync;
    dispatch(request());
    try {
      const project = await getProject(projectNo);
      dispatch(success(project));
      return true;
    } catch (e) {
      dispatch(failure(e.message));
      return false;
    }
  }
}

export function getPythonCodeThunk(projectNo : string) :
  ThunkAction<Promise<boolean>, RootState, null, ProjectAPIActionTypes> {
  return async dispatch => {
    const {request, success, failure} = getPythonCodeAsync;
    dispatch(request());
    try {
      const pythonCode = await getPythonCode(projectNo);
      dispatch(success(pythonCode));
      return false;
    } catch (e) {
      dispatch(failure(e.message));
      return true;
    }
  }
}

export function getProjectConfigThunk(projectNo: string) :
ThunkAction<Promise<boolean>,RootState, null, ProjectAPIActionTypes> {
  return async dispatch => {
    const {request, success, failure} = getProjectConfigAsync;
    dispatch(request());
    try {
      const projectConfig = await getProjectConfig(projectNo);
      dispatch(success(projectConfig));
      return false;
    } catch (e) {
      dispatch(failure(e.message));
      return true;
    }
  }
}

export function putProjectInfoThunk(projectNo: string, name: string, description: string) :
ThunkAction<Promise<boolean>,RootState, null, ProjectAPIActionTypes> {
  return async dispatch => {
    const {request, success, failure} = putProjectInfoAsync;
    dispatch(request());
    try {
      await updateProjectInfo(projectNo, name, description);
      dispatch(success());
      return true;
    } catch(e){
      dispatch(failure(e.message));
      return false;
    }
  }
}

export function putProjectConfigThunk(projectNo: string, projectConfig : IProjectConfig) :
  ThunkAction<Promise<boolean>,RootState, null, ProjectAPIActionTypes> {
  return async dispatch => {
    const {request, success, failure} = putProjectConfigAsync;
    dispatch(request());
    try {
      await updateProjectConfig(projectNo, projectConfig);
      dispatch(success());
      return true;
    } catch(e){
      dispatch(failure(e.message));
      return false;
    }
  }
}
