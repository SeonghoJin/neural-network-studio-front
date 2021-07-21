import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import { getProjectAsync } from './actions';
import { ProjectActionTypes } from './types';
import { getProject } from '../../API/project';

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
