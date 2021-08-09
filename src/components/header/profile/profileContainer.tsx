import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Profile from './profile';
import { RootDispatch } from '../../../module';
import { logoutThunks } from '../../../module/API/auth/thunks';
import { setAuthentication, UserType } from '../../../module/Auth';

const ProfileContainer = () => {
	const thunkDispatch: RootDispatch = useDispatch();
	const dispatch = useDispatch();
	const history = useHistory();

	const logout = useCallback(() => {
		thunkDispatch(logoutThunks()).then((res) => {
			if (!res) return;
			dispatch(
				setAuthentication({
					user: {
						type: UserType.Logout,
						profile: null,
					},
				})
			);
			history.push('/');
		});
	}, [dispatch, history, thunkDispatch]);

	return <Profile logout={logout} />;
};

export default ProfileContainer;
