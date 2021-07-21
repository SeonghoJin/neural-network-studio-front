import { combineReducers } from 'redux';
import reactFlow from './ReactFlow';
import project from './Project';
import getPythonCode from './Project/getPythonCode';
import reactFlowInstance  from './ReactFlowInstance';
import api from './Project/API'
const rootReducer = combineReducers({
  reactFlow,
  project,
  getPythonCode,
  reactFlowInstance,
  api,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
