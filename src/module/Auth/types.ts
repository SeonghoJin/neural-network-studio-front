import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { UserProfile } from '../../API/User/types';

export enum UserType {
	Login = 'Login',
	Logout = 'Logout',
	SignUp = 'SignUp',
	Visitor = 'Visitor',
}

export type AuthenticationActionTypes = ActionType<typeof actions>;

export type AuthenticationState = {
	user: {
		type: UserType;
		profile: UserProfile | null;
	};
};
