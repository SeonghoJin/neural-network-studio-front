import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../index';
import { AuthAPIActionTypes } from './types';
import { loginAsync, logoutAsync } from './actions';
import { login, logout } from '../../../API/Auth';
import { LoginParams } from '../../../API/Auth/types';

export const loginThunks = (
	params: LoginParams
): ThunkAction<Promise<boolean>, RootState, null, AuthAPIActionTypes> => {
	return async (dispatch) => {
		const { request, success, failure } = loginAsync;
		dispatch(request());

		try {
			await login(params);
			dispatch(success());
			return true;
		} catch (e) {
			dispatch(failure(e.message));
			return false;
		}
	};
};

export const logoutThunks = (): ThunkAction<Promise<boolean>, RootState, null, AuthAPIActionTypes> => {
	return async (dispatch) => {
		const { request, success, failure } = logoutAsync;
		dispatch(request());
		try {
			await logout();
			dispatch(success());
			return true;
		} catch (e) {
			dispatch(failure(e.message));
			return false;
		}
	};
};
