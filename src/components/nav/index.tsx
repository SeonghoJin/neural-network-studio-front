import React from 'react';
import useAuthentication, { UserType } from '../../hooks/useAuthentication';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import UserNavigation from './UserNavigation';

const Navigation = () => {
	const { user } = useAuthentication();
	return <>{user && (user.type === UserType.Login ? <UserNavigation user={user} /> : <AuthNavigation />)}</>;
};

Navigation.defaultProps = {
	children: <></>,
};

export default Navigation;
