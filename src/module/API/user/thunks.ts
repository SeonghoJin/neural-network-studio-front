import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../index';
import { getUserProfileAsync, updateUserProfileAsync } from './actions';
import { getUserProfile, updateUserProfile } from '../../../API/User';
import { UserAPIActionTypes } from './types';
import { UpdatedUserProfile, UserProfile } from '../../../API/User/types';

export const getUserProfileThunks = (): ThunkAction<
	Promise<UserProfile | null>,
	RootState,
	null,
	UserAPIActionTypes
> => {
	return async (dispatch) => {
		const { request, success, failure } = getUserProfileAsync;
		dispatch(request());

		try {
			const response = await getUserProfile();
			dispatch(success(response));
			return response;
		} catch (e) {
			dispatch(failure(e.message));
			return null;
		}
	};
};

export const updateUserProfileThunks = (
	updatedUserProfile: UpdatedUserProfile
): ThunkAction<Promise<boolean>, RootState, null, UserAPIActionTypes> => {
	return async (dispatch) => {
		const { request, success, failure } = updateUserProfileAsync;
		dispatch(request());
		try {
			const response = await updateUserProfile(updatedUserProfile);
			dispatch(success(response));
			return true;
		} catch (e) {
			dispatch(failure(e.message));
			return false;
		}
	};
};
