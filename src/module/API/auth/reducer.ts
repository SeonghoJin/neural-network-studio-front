import { createReducer } from 'typesafe-actions';
import { AuthAPIAction } from './actions';
import { AuthAPIActionTypes, AuthAPIState } from './types';

const initialState: AuthAPIState = {
	loginResult: {
		data: false,
		error: null,
		loading: false,
	},
	logoutResult: {
		data: false,
		error: null,
		loading: false,
	},
};

const authApi = createReducer<AuthAPIState, AuthAPIActionTypes>(initialState, {
	[AuthAPIAction.LOGIN]: (state) => ({
		...state,
		logoutResult: {
			data: false,
			error: null,
			loading: true,
		},
	}),
	[AuthAPIAction.LOGIN_SUCCESS]: (state) => ({
		...state,
		loginResult: {
			data: true,
			error: null,
			loading: false,
		},
	}),
	[AuthAPIAction.LOGIN_ERROR]: (state, action) => ({
		...state,
		loginResult: {
			data: false,
			error: action.payload,
			loading: false,
		},
	}),
	[AuthAPIAction.LOGOUT]: (state) => ({
		...state,
		logoutResult: {
			data: false,
			error: null,
			loading: true,
		},
	}),
	[AuthAPIAction.LOGOUT_SUCCESS]: (state) => ({
		...state,
		logoutResult: {
			data: true,
			error: null,
			loading: false,
		},
	}),
	[AuthAPIAction.LOGOUT_ERROR]: (state, action) => ({
		...state,
		logoutResult: {
			data: false,
			error: action.payload,
			loading: false,
		},
	}),
});

export default authApi;
