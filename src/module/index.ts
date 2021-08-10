import { combineReducers } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ActionType } from 'typesafe-actions';
import reactFlowInstance from './ReactFlowInstance';
import projectApi from './API/project';
import elements from './Elements';

const rootReducer = combineReducers({
	reactFlowInstance,
	projectApi,
	elements,
});

export default rootReducer;
export type RootDispatch = ThunkDispatch<
	RootState,
	never,
	ActionType<typeof projectApi | typeof reactFlowInstance | typeof elements>
>;
export type RootState = ReturnType<typeof rootReducer>;
