import { createReducer } from 'typesafe-actions';
import { AuthenticationActionTypes, AuthenticationState, UserType } from './types';
import { AuthenticationAction } from './actions';

const initialState: AuthenticationState = {
	user: {
		type: UserType.Visitor,
		profile: null,
	},
};

const auth = createReducer<AuthenticationState, AuthenticationActionTypes>(initialState, {
	[AuthenticationAction.SET_AUTHENTICATION]: (state, action) => ({
		user: {
			...action.payload.user,
		},
	}),
});

export default auth;
