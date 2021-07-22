import { combineReducers } from 'redux';
import reactFlowInstance  from './ReactFlowInstance';
import projectApi from './API/project'
import projectController from './ProjectController';
import elements from './Elements';

const rootReducer = combineReducers({
  reactFlowInstance,
  projectApi,
  projectController,
  elements,
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
