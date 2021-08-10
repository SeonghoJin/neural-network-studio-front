import React from 'react';
import Logo from './logo';
import Auth from './auth/auth';
import style from './index.module.css';
import ProfileContainer from './profile/profileContainer';
import useAuthentication from '../../hooks/useAuthentication';
import SimpleBackdrop from '../utils/BackLoading';

type Props = {
	children?: any;
};

const Header = ({ children }: Props) => {
	const { user, loading } = useAuthentication();
	return (
		<header className={`${style.topHeader}`}>
			<div className={`${style.headerWrapper}`}>
				<Logo />
				<div className="top-center">{children}</div>
				<div className="top-right">
					{!loading && user?.isAuthentication && <ProfileContainer />}
					{!loading && !user?.isAuthentication && <Auth />}
				</div>
			</div>
		</header>
	);
};

Header.defaultProps = {
	children: <></>,
};

export default Header;
