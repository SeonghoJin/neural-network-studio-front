import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import { getProjectAsync, putProjectContentAsync } from './actions';
import { ProjectActionTypes } from './types';
import { getProject, updateProjectContent } from '../../API/project';
import { IProjectContentDto } from '../../API/project/types';
import { FlowElement } from 'react-flow-renderer';

export function getProjectThunk(projectNo: string): ThunkAction<
  void, RootState, null, ProjectActionTypes>{
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

export function updateProjectThunk(projectNo: string , projectContent: { output: string; layers: Array<FlowElement<any>>})
: ThunkAction<void, RootState, null, ProjectActionTypes>{
  return async dispatch => {
    const {request, success, failure} = putProjectContentAsync;
    dispatch(request());
    try{
      await updateProjectContent(projectNo, projectContent);
      dispatch(success());
    }catch (e) {
      dispatch(failure(e.message));
    }
  }
}
