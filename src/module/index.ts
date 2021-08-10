import { combineReducers } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ActionType } from 'typesafe-actions';
import reactFlowInstance from './ReactFlowInstance';
import elements from './Elements';

const rootReducer = combineReducers({
	reactFlowInstance,
	elements,
});

export default rootReducer;
export type RootDispatch = ThunkDispatch<RootState, never, ActionType<typeof reactFlowInstance | typeof elements>>;
export type RootState = ReturnType<typeof rootReducer>;
