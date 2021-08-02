import React from 'react';
import Logo from './logo';
import Auth from './auth/auth';
import style from './index.module.css';
import ProfileContainer from './profile/profileContinaer';
import useGetUserProfileResult from '../../hooks/APIResult/user/useGetUserProfileResult';

type Props = {
	children?: any;
};

const Header = ({ children }: Props) => {
	const { data, error, loading } = useGetUserProfileResult();
	return (
		<header className={`${style.topHeader}`}>
			<div className={`${style.headerWrapper}`}>
				<Logo />
				<div className="top-center">{children}</div>
				<div className="top-right">{!loading && (data ? <ProfileContainer userProfile={data} /> : <Auth />)}</div>
			</div>
		</header>
	);
};

Header.defaultProps = {
	children: <></>,
};

export default Header;
