import { combineReducers } from 'redux';
import reactFlowInstance  from './ReactFlowInstance';
import api from './API'
const rootReducer = combineReducers({
  reactFlowInstance,
  api,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
