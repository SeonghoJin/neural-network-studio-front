import { combineReducers } from 'redux';
import reactFlowInstance  from './ReactFlowInstance';
import projectApi from './API/project'
import projectController from './ProjectController';
import elements from './Elements';
import usePutProjectContentResult
  from '../hooks/usePutProjectContentResult';
import { ThunkDispatch } from 'redux-thunk';
import { ActionType } from 'typesafe-actions';

const rootReducer = combineReducers({
  reactFlowInstance,
  projectApi,
  projectController,
  elements,
});

export default rootReducer
export type RootDispatch = ThunkDispatch<
  RootState,
  any, ActionType<
    typeof projectApi
  | typeof reactFlowInstance
  | typeof projectController
  | typeof elements
  >
>
export type RootState = ReturnType<typeof rootReducer>
