import { createReducer } from 'typesafe-actions';
import { UserAPIActionTypes, UserAPIState } from './types';
import { UserAPIAction } from './actions';

const initialState: UserAPIState = {
	getUserProfileResult: {
		loading: false,
		data: null,
		error: null,
	},
	updateUserProfileResult: {
		loading: false,
		data: null,
		error: null,
	},
};

const userApi = createReducer<UserAPIState, UserAPIActionTypes>(initialState, {
	[UserAPIAction.GET_USER_PROFILE]: (state) => ({
		...state,
		getUserProfileResult: {
			loading: true,
			data: null,
			error: null,
		},
	}),
	[UserAPIAction.GET_USER_PROFILE_SUCCESS]: (state, action) => ({
		...state,
		getUserProfileResult: {
			loading: false,
			data: action.payload,
			error: null,
		},
	}),
	[UserAPIAction.GET_USER_PROFILE_ERROR]: (state, action) => ({
		...state,
		getUserProfileResult: {
			loading: false,
			data: null,
			error: action.payload,
		},
	}),
	[UserAPIAction.UPDATE_USER_PROFILE]: (state) => ({
		...state,
		updateUserProfileResult: {
			loading: true,
			data: null,
			error: null,
		},
	}),
	[UserAPIAction.UPDATE_USER_PROFILE_SUCCESS]: (state, action) => ({
		...state,
		updateUserProfileResult: {
			loading: false,
			data: action.payload,
			error: null,
		},
	}),
	[UserAPIAction.UPDATE_USER_PROFILE_ERROR]: (state, action) => ({
		...state,
		getUserProfileResult: {
			loading: false,
			data: null,
			error: action.payload,
		},
	}),
});

export default userApi;
