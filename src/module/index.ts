import { combineReducers } from 'redux';
import reactFlowInstance  from './ReactFlowInstance';
import projectApi from './API/project'
const rootReducer = combineReducers({
  reactFlowInstance,
  api: projectApi,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
