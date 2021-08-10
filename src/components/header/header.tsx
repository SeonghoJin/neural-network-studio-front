import React from 'react';
import Logo from './logo';
import Auth from './auth/auth';
import style from './index.module.css';
import useGetUserProfileResult from '../../hooks/APIResult/user/useGetUserProfileResult';
import ProfileContainer from './profile/profileContainer';

type Props = {
	children?: any;
};

const Header = ({ children }: Props) => {
	const { data, error } = useGetUserProfileResult();
	return (
		<header className={`${style.topHeader}`}>
			<div className={`${style.headerWrapper}`}>
				<Logo />
				<div className="top-center">{children}</div>
				<div className="top-right">
					{data && <ProfileContainer userProfile={data} />}
					{error && <Auth />}
				</div>
			</div>
		</header>
	);
};

Header.defaultProps = {
	children: <></>,
};

export default Header;
