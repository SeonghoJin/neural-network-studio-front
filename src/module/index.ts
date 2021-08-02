import { combineReducers } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ActionType } from 'typesafe-actions';
import reactFlowInstance from './ReactFlowInstance';
import projectApi from './API/project';
import userApi from './API/user';
import elements from './Elements';
import projectConfig from './projectConfig';
import auth from './Auth';
import authApi from './API/auth';
import projectInfo from './projectInfo';

const rootReducer = combineReducers({
	reactFlowInstance,
	projectApi,
	elements,
	projectConfig,
	projectInfo,
	userApi,
	authApi,
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
		| typeof userApi
		| typeof auth
		| typeof authApi
	>
>;
export type RootState = ReturnType<typeof rootReducer>;
