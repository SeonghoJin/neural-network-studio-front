import { combineReducers } from 'redux';
import reactFlowInstance  from './ReactFlowInstance';
import projectApi from './API/project'
import projectController from './ProjectEditorController';
import elements from './Elements';
import { ThunkDispatch } from 'redux-thunk';
import { ActionType } from 'typesafe-actions';
import projectConfig from './projectConfig';

const rootReducer = combineReducers({
  reactFlowInstance,
  projectApi,
  projectController,
  elements,
  projectConfig,
});

export default rootReducer
export type RootDispatch = ThunkDispatch<
  RootState,
  any, ActionType<
    typeof projectApi
  | typeof reactFlowInstance
  | typeof projectController
  | typeof elements
  | typeof projectConfig
  >
>
export type RootState = ReturnType<typeof rootReducer>
