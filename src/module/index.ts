import { combineReducers } from 'redux';
import reactFlow from './ReactFlow';
const rootReducer = combineReducers({
  reactFlow
}) 

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
