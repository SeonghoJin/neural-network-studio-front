import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Backdrop } from '@material-ui/core';
import style from './profile.module.css';
import DropMenu from '../../utils/dropMenu/dropMenu';
import useLogout from '../../../hooks/useLogout';
import useAuthentication from '../../../hooks/useAuthentication';

type Props = {
	logout: () => void;
};

const LogoutResult = () => {
	const logoutResult = useLogout();

	return (
		<>
			<Backdrop open={logoutResult.loading} />
			{logoutResult.error && logoutResult.errorModal}
		</>
	);
};

const Profile = ({ logout }: Props) => {
	const [dropMenuToggle, setDropMenuToggle] = useState(false);
	const dropRef = useRef<HTMLDivElement | null>(null);
	const { user } = useAuthentication();

	const openMenu = useCallback(() => {
		setDropMenuToggle(!dropMenuToggle);
	}, [setDropMenuToggle, dropMenuToggle]);

	const closeMenu = useCallback(
		(e) => {
			if (!dropRef.current?.contains(e.target)) {
				setDropMenuToggle(false);
			}
		},
		[setDropMenuToggle]
	);

	useEffect(() => {
		document.addEventListener('mousedown', closeMenu);
		return () => {
			document.removeEventListener('mousedown', closeMenu);
		};
	}, [closeMenu]);

	return (
		<>
			<div
				tabIndex={0}
				role="button"
				onKeyDown={openMenu}
				className={`${style.profileImage}`}
				onClick={openMenu}
				ref={dropRef}
			>
				<img alt="undefined" src={user?.profile?.profileImage.url} />
				<DropMenu open={dropMenuToggle} custom={style.dropMenu}>
					<div className={`${style.profileMenu}`}>
						<Link to="/profile">내 정보</Link>
					</div>
					<div className={`${style.profileMenu}`}>
						<button type="button" onClick={logout}>
							로그아웃
						</button>
					</div>
				</DropMenu>
			</div>
			<LogoutResult />
		</>
	);
};

export default Profile;
