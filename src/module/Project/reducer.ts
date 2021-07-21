import { ProjectActionTypes, ProjectState } from './types';
import { createReducer } from 'typesafe-actions';
import { ProjectAction } from './actions';

const initialState: ProjectState = {
  loading: false,
  error: null,
  data: null,
}

const project = createReducer<ProjectState, ProjectActionTypes>(initialState, {
  [ProjectAction.GET_PROJECT]: state => ({
    ...state,
    loading: true,
    error: null,
    data: null,
  }),
  [ProjectAction.GET_PROJECT_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    error: null,
    data: action.payload
  }),
  [ProjectAction.GET_PROJECT_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    data: null,
  }),
});

export default project;
