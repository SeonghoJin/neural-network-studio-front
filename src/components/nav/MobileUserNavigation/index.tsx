import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../../hooks/useAuthentication';
import { StaticPath } from '../../PagePathConsts';
import imgProfile1 from '../../../static/img/img_profile1.png';
import imgClose2 from '../../../static/img/ico_close2.png';
import { ProfileImage } from '../UserNavigation';

export const MobileUserNavigation = ({
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
