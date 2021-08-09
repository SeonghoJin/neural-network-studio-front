import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Profile from './profile';
import useLogoutResult from '../../../hooks/APIResult/auth/useLogoutResult';
import useAuthentication, { UserType } from '../../../hooks/useAuthentication';

const ProfileContainer = () => {
	const { fetch } = useLogoutResult();
	const { setUser } = useAuthentication();
	const history = useHistory();

	const logout = useCallback(() => {
		fetch().then((res) => {
			if (!res) return;
			setUser({
				type: UserType.Logout,
				profile: null,
			});
			history.push('/');
		});
	}, [fetch, history, setUser]);

	return <Profile logout={logout} />;
};

export default ProfileContainer;
