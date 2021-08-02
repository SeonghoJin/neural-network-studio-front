import React, { FC } from 'react';
import Profile from './profile/profile';
import Logo from './logo';
import Auth from './auth/auth';
import style from './index.module.css';
import { UserProfile } from '../../API/User/types';

type Props = {
	auth: any;
	user: UserProfile | null;
	children?: any;
	loading?: any;
};

const Header: FC<Props> = ({ auth, user, children, loading }: Props) => {
	return (
		<header className={`${style.topHeader}`}>
			<div className={`${style.headerWrapper}`}>
				<Logo />
				<div className="top-center">{children}</div>
				<div className="top-right">{!loading && (auth ? <Profile user={user} /> : <Auth />)}</div>
			</div>
		</header>
	);
};

Header.defaultProps = {
	loading: false,
	children: <></>,
};

export default Header;
