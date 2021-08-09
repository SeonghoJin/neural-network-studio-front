import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Profile from './profile';
import { RootDispatch } from '../../../module';
import { setAuthentication, UserType } from '../../../module/Auth';
import useLogoutResult from '../../../hooks/APIResult/auth/useLogoutResult';

const ProfileContainer = () => {
	const { fetch } = useLogoutResult();
	const dispatch = useDispatch();
	const history = useHistory();

	const logout = useCallback(() => {
		fetch().then((res) => {
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
	}, [dispatch, fetch, history]);

	return <Profile logout={logout} />;
};

export default ProfileContainer;
