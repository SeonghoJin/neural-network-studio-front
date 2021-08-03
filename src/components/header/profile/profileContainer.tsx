import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { UserProfile } from '../../../API/User/types';
import Profile from './profile';
import { RootDispatch } from '../../../module';
import { logoutThunks } from '../../../module/API/auth/thunks';
import { getUserProfileThunks } from '../../../module/API/user/thunks';
import { setAuthentication, UserType } from '../../../module/Auth';

type Props = {
	userProfile: UserProfile;
};

const ProfileContainer = ({ userProfile }: Props) => {
	const thunkDispatch: RootDispatch = useDispatch();
	const dispatch = useDispatch();

	const logout = useCallback(() => {
		thunkDispatch(logoutThunks())
			.then(async (res) => {
				if (!res) return null;
				const response = await thunkDispatch(getUserProfileThunks());
				return response;
			})
			.then((res) => {
				if (res) return;
				dispatch(
					setAuthentication({
						user: {
							type: UserType.Logout,
							profile: null,
						},
					})
				);
			});
	}, [dispatch, thunkDispatch]);

	return <Profile logout={logout} userProfile={userProfile} />;
};

export default ProfileContainer;
