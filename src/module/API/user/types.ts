import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { UpdatedUserProfile, UserProfile } from '../../../API/User/types';

export type UserAPIActionTypes = ActionType<typeof actions>;

export type UserAPIState = {
	getUserProfileResult: {
		loading: boolean;
		data: UserProfile | null;
		error: string | null;
	};

	updateUserProfileResult: {
		loading: boolean;
		data: UpdatedUserProfile | null;
		error: string | null;
	};
};
