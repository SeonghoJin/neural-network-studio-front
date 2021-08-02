import { createAsyncAction } from 'typesafe-actions';

export enum AuthAPIAction {
	LOGIN = 'LOGIN',
	LOGIN_SUCCESS = 'LOGIN_SUCCESS',
	LOGIN_ERROR = 'LOGIN_ERROR',
	LOGOUT = 'LOGOUT',
	LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
	LOGOUT_ERROR = 'LOGOUT_ERROR',
}

export const loginAsync = createAsyncAction(
	AuthAPIAction.LOGIN,
	AuthAPIAction.LOGIN_SUCCESS,
	AuthAPIAction.LOGIN_ERROR
)<undefined, undefined, string>();

export const logoutAsync = createAsyncAction(
	AuthAPIAction.LOGOUT,
	AuthAPIAction.LOGOUT_SUCCESS,
	AuthAPIAction.LOGOUT_ERROR
)<undefined, undefined, string>();
