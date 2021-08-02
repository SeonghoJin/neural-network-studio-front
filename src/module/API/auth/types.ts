import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AuthAPIActionTypes = ActionType<typeof actions>;

export type AuthAPIState = {
	loginResult: {
		loading: boolean;
		error: null | string;
		data: boolean;
	};

	logoutResult: {
		loading: boolean;
		error: null | string;
		data: boolean;
	};
};
