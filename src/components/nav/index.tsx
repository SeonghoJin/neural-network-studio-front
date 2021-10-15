import React from 'react';
import useAuthentication, { UserType } from '../../hooks/useAuthentication';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import UserNavigation from './UserNavigation';

type Props = {
	currentMenu: number;
};

const Navigation = ({ currentMenu }: Props) => {
	const { user } = useAuthentication();
	return (
		<>
			{user &&
				(user.type === UserType.Login ? <UserNavigation user={user} currentMenu={currentMenu} /> : <AuthNavigation />)}
		</>
	);
};

// Navigation.defaultProps = {
// 	children: <></>,
// };

export default Navigation;
