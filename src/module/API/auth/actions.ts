import { createAsyncAction } from 'typesafe-actions';
import { createStandardAction } from '../../../util';

export enum AuthAPIAction {
	LOGIN = 'LOGIN',
	LOGIN_SUCCESS = 'LOGIN_SUCCESS',
	LOGIN_ERROR = 'LOGIN_ERROR',
	INIT_LOGIN = 'INIT_LOGIN',
	LOGOUT = 'LOGOUT',
	LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
	LOGOUT_ERROR = 'LOGOUT_ERROR',
	INIT_LOGOUT = 'INIT_LOGOUT',
}

export const initLogin = createStandardAction(AuthAPIAction.INIT_LOGIN)<undefined>();
export const loginAsync = createAsyncAction(
	AuthAPIAction.LOGIN,
	AuthAPIAction.LOGIN_SUCCESS,
	AuthAPIAction.LOGIN_ERROR
)<undefined, undefined, string>();

export const initLogout = createStandardAction(AuthAPIAction.INIT_LOGOUT)<undefined>();
export const logoutAsync = createAsyncAction(
	AuthAPIAction.LOGOUT,
	AuthAPIAction.LOGOUT_SUCCESS,
	AuthAPIAction.LOGOUT_ERROR
)<undefined, undefined, string>();
