import { combineReducers } from 'redux';
import reactFlowInstance from './ReactFlowInstance';
import elements from './Elements';

const rootReducer = combineReducers({
	reactFlowInstance,
	elements,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
