import { combineReducers } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ActionType } from 'typesafe-actions';
import reactFlowInstance from './ReactFlowInstance';
import projectApi from './API/project';
import elements from './Elements';
import projectConfig from './projectConfig';
import auth from './Auth';
import projectInfo from './projectInfo';

const rootReducer = combineReducers({
	reactFlowInstance,
	projectApi,
	elements,
	projectConfig,
	projectInfo,
	auth,
});

export default rootReducer;
export type RootDispatch = ThunkDispatch<
	RootState,
	never,
	ActionType<
		| typeof projectApi
		| typeof reactFlowInstance
		| typeof elements
		| typeof projectConfig
		| typeof projectInfo
		| typeof auth
	>
>;
export type RootState = ReturnType<typeof rootReducer>;
