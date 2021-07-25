import { ProjectInfoActionTypes, ProjectInfoState } from './types';
import { createReducer } from 'typesafe-actions';
import { ProjectInfoAction } from './actions';

const initalState : ProjectInfoState = {
  name: null,
  description: null
}

const projectInfo = createReducer<ProjectInfoState, ProjectInfoActionTypes>(
  initalState,
  {
    [ProjectInfoAction.SET_PROJECT_Info]: (state, action) => ({
      ...state,
      name: action.payload.name,
      description: action.payload.description
    })
  }
);

export default projectInfo
