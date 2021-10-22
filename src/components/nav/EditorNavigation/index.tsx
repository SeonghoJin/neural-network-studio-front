import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { format } from 'util';
import useLogout from '../../../hooks/useLogout';
import { User } from '../../../hooks/useAuthentication';
import imgLogo2 from '../../../static/img/img_logo2.png';
import imgProfile1 from '../../../static/img/img_profile1.png';
import DropMenu from '../../utils/dropMenu/dropMenu';
import { DynamicPath, StaticPath } from '../../PagePathConsts';
import useProjectLocation from '../../../hooks/useProjectLocation';
import { MobileUserNavigation } from '../MobileUserNavigation';

const ProfileImage = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	overflow: hidden;
	cursor: pointer;
`;

type Props = {
	user: User;
	currentMenu: number;
};

const EditorNavigation = ({ user, currentMenu }: Props) => {
	const [flag, setFlag] = useState(false);
	const { fetch } = useLogout();
	const { projectNo } = useProjectLocation();
	const [mobileFlag, setMobileFlag] = useState(false);
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
					<Link to={format(DynamicPath.PROJECT_FORMAT, projectNo)} className={currentMenu === 1 ? 'active' : ''}>
						<div className="ico ico-v3" />
						<div className="tit">편집</div>
					</Link>

					<Link to={format(DynamicPath.PROJECT_TRAIN_FORMAT, projectNo)} className={currentMenu === 2 ? 'active' : ''}>
						<div className="ico ico-v4" />
						<div className="tit">학습 기록</div>
					</Link>

					<Link to={format(DynamicPath.PROJECT_CONFIG_FORMAT, projectNo)} className={currentMenu === 3 ? 'active' : ''}>
						<div className="ico ico-v5" />
						<div className="tit">프로젝트 설정</div>
					</Link>

					<Link
						to={format(DynamicPath.PROJECT_DATASET_FORMAT, projectNo)}
						className={currentMenu === 4 ? 'active' : ''}
					>
						<div className="ico ico-v6" />
						<div className="tit">데이터셋 설정</div>
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

			<MobileUserNavigation user={user} flag={mobileFlag} setFlag={setMobileFlag}>
				<>
					<li>
						<Link to={format(DynamicPath.PROJECT_FORMAT, projectNo)}>편집</Link>
					</li>
					<li>
						<Link to={format(DynamicPath.PROJECT_TRAIN_FORMAT, projectNo)}>학습 기록</Link>
					</li>
					<li>
						<Link to={format(DynamicPath.PROJECT_CONFIG_FORMAT, projectNo)}>프로젝트 설정</Link>
					</li>
					<li>
						<Link to={format(DynamicPath.PROJECT_DATASET_FORMAT, projectNo)}>데이터셋 설정</Link>
					</li>
				</>
			</MobileUserNavigation>
		</>
	);
};

export default EditorNavigation;
