import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.css';
import DropMenu from '../../utils/dropMenu/dropMenu';
import useLogout from '../../../hooks/useLogout';
import { User } from '../../../hooks/useAuthentication';

type Props = {
	user: User;
};

const UserNavigation = ({ user }: Props) => {
	const [flag, setFlag] = useState(false);
	const { fetch, successFeedback, errorFeedback, loadingFeedback } = useLogout();

	const toggleMenu = useCallback(
		(e) => {
			e.nativeEvent.stopImmediatePropagation();
			setFlag(!flag);
		},
		[flag, setFlag]
	);

	const closeMenu = useCallback(
		(e) => {
			setFlag(false);
		},
		[setFlag]
	);

	useEffect(() => {
		document.addEventListener('click', closeMenu);
		return () => {
			document.removeEventListener('click', closeMenu);
		};
	}, [closeMenu]);

	return (
		<>
			{loadingFeedback}
			{successFeedback}
			{errorFeedback}
			<div tabIndex={0} role="button" onKeyDown={toggleMenu} className={`${style.profileImage}`} onClick={toggleMenu}>
				<img alt="undefined" src={user?.profile?.profileImage.url} />
				<DropMenu open={flag} custom={style.dropMenu}>
					<div className={`${style.profileMenu}`}>
						<Link to="/profile">내 정보</Link>
					</div>
					<div className={`${style.profileMenu}`}>
						<button type="button" onClick={() => fetch()}>
							로그아웃
						</button>
					</div>
				</DropMenu>
			</div>
		</>
	);
};

export default UserNavigation;
