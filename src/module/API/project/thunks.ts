import { RootState } from '../../index';
import { ProjectAPIActionTypes } from './types';
import { ThunkAction } from 'redux-thunk';
import { getProjectAsync, getPythonCodeAsync, putProjectContentAsync } from './actions';
import { getProject, getPythonCode, updateProjectContent } from '../../../API/project';
import { IFlowState } from '../../../API/project/types';

export function updateProjectContentThunk(
  projectNo: string , output: string, flowState?: IFlowState)
: ThunkAction<void, RootState, null, ProjectAPIActionTypes>{
  return async dispatch => {
    const {request, success, failure} = putProjectContentAsync;
    dispatch(request());
      try{
        if(flowState == null){
          throw new Error("잘못된 저장입니다");
        }
        await updateProjectContent(projectNo, {
          output:output,
          flowState:flowState,
        });
        dispatch(success());
      }catch (e) {
        dispatch(failure(e.message));
      }
  }
}

export function getProjectThunk(projectNo: string): ThunkAction<
  void, RootState, null, ProjectAPIActionTypes>{
  return async dispatch => {
    const {request, success, failure} = getProjectAsync;
    dispatch(request());
    try {
      const project = await getProject(projectNo);
      dispatch(success(project));
    } catch (e) {
      dispatch(failure(e.message));
    }
  }
}

export function getPythonCodeThunk(projectNo : string) :
  ThunkAction<void, RootState, null, ProjectAPIActionTypes> {
  return async dispatch => {
    const {request, success, failure} = getPythonCodeAsync;
    dispatch(request());
    try {
      const pythonCode = await getPythonCode(projectNo);
      dispatch(success(pythonCode));
    } catch (e) {
      dispatch(failure(e.message));
    }
  }
}
