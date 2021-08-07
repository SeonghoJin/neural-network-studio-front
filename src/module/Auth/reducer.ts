import { createReducer } from 'typesafe-actions';
import { AuthenticationActionTypes, AuthenticationState, UserType } from './types';
import { AuthenticationAction } from './actions';

const initialState: AuthenticationState = {
	user: null,
};

const auth = createReducer<AuthenticationState, AuthenticationActionTypes>(initialState, {
	[AuthenticationAction.SET_AUTHENTICATION]: (state, action) => ({
		...action.payload,
	}),
});

export default auth;
