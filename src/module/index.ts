import { combineReducers } from 'redux';
import reactFlowInstance  from './ReactFlowInstance';
import projectApi from './API/project'
import projectController from './ProjectController';

const rootReducer = combineReducers({
  reactFlowInstance,
  projectApi,
  projectController,
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
