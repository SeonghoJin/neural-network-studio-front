import { combineReducers } from 'redux';
import reactFlow from './ReactFlow';
import project from './Project';
const rootReducer = combineReducers({
  reactFlow,
  project
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
