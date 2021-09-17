import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useLogout from '../../../hooks/useLogout';
import { User } from '../../../hooks/useAuthentication';
import imgLogo2 from '../../../static/img/img_logo2.png';
import imgProfile1 from '../../../static/img/img_profile1.png';
import imgClose2 from '../../../static/img/ico_close2.png';
import DropMenu from '../../utils/dropMenu/dropMenu';
import { StaticPath } from '../../PagePathConsts';

const ProfileImage = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	overflow: hidden;
	cursor: pointer;
`;

type Props = {
	user: User;
};

const MobileUserNavigation = ({
	user,
	flag,
	setFlag,
}: {
	user: User | undefined;
	flag: boolean;
	setFlag: (flag: boolean) => void;
}) => {
	const handleResize = useCallback(() => {
		setFlag(false);
	}, [setFlag]);

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return (
		<>
			<div className="m-gnb" style={{ display: `${(flag && 'block') || ''}`, right: 0 }}>
				<div className="top">
					<div className="m-profile">
						<Link to={StaticPath.PROFILE}>
							<ProfileImage src={user?.profile?.profileImage?.url || imgProfile1} alt={' '} className="img-profile" />
							<div className="user-id">{user?.profile?.name}</div>
						</Link>
					</div>

					<button
						type="button"
						className="m-gnb-close js-hamburger-close"
						onClick={() => {
							setFlag(false);
						}}
					>
						<img src={imgClose2} alt=" " />
					</button>
				</div>

				<ol className="m-gnb-menu">
					<li>
						<Link to={StaticPath.MAIN}>Home</Link>
					</li>
					<li>
						<Link to={StaticPath.DASHBOARD_PROJECTS}>대시보드</Link>
					</li>
					<li>
						<Link to={StaticPath.ASSET_MAIN}>에셋</Link>
					</li>
				</ol>
			</div>

			<div
				className="m-gnb-bg js-hamburger-close"
				style={{ display: `${(flag && 'block') || ''}` }}
				onClick={() => {
					setFlag(false);
				}}
			/>
		</>
	);
};

const UserNavigation = ({ user }: Props) => {
	const [flag, setFlag] = useState(false);
	const [mobileFlag, setMobileFlag] = useState(false);
	const { fetch } = useLogout();

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
			<header className="header">
				<Link to={StaticPath.MAIN}>
					<img src={imgLogo2} alt="NNS" className="hd-logo" />
				</Link>

				<div className="hd-menu">
					<Link to={StaticPath.DASHBOARD_PROJECTS}>
						<div className="ico ico-v1" />
						<div className="tit">대시보드</div>
					</Link>

					<Link to={StaticPath.ASSET_MAIN}>
						<div className="ico ico-v2" />
						<div className="tit">에셋</div>
					</Link>
				</div>

				<div className="hd-profile" onClick={toggleMenu} tabIndex={0} role="button" onKeyDown={toggleMenu}>
					<div className="user-info js-more">
						<ProfileImage src={user?.profile?.profileImage?.url || imgProfile1} alt={' '} className="img-profile" />
						<div className="user-id">{user?.profile?.name} 님</div>
					</div>

					<DropMenu open={flag}>
						<Link to="/profile">내 정보</Link>
						<button
							type="button"
							style={{
								width: '100%',
							}}
							onClick={() => fetch()}
						>
							로그아웃
						</button>
					</DropMenu>
				</div>

				<button
					type="button"
					className="hd-hamburger js-hamburger"
					style={{
						zIndex: 1,
					}}
					onClick={() => {
						setMobileFlag(true);
					}}
				/>
			</header>

			<MobileUserNavigation user={user} flag={mobileFlag} setFlag={setMobileFlag} />
		</>
	);
};

export default UserNavigation;
