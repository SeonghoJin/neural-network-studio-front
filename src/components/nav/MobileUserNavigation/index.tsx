import React, { useCallback, useEffect } from 'react';
import $ from 'jquery';
import 'jquery-easing';
import { Link } from 'react-router-dom';
import { User } from '../../../hooks/useAuthentication';
import { StaticPath } from '../../PagePathConsts';
import imgProfile1 from '../../../static/img/img_profile1.png';
import imgClose2 from '../../../static/img/ico_close2.png';
import { ProfileImage } from '../UserNavigation';

type Props = {
	user: User | undefined;
	flag: boolean;
	setFlag: (flag: boolean) => void;
	children: JSX.Element;
};

export const MobileUserNavigation = ({ user, flag, setFlag, children }: Props) => {
	const handleResize = useCallback(() => {
		setFlag(false);
	}, [setFlag]);

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		$('.js-hamburger').click(function () {
			$('.m-gnb').animate({ right: 0 }, 500, 'easeOutExpo');
			$('.m-gnb, .m-gnb-bg').show();
		});
		$('.js-hamburger-close').click(function () {
			$('.m-gnb').animate({ right: '-100%' }, 500, 'easeOutExpo');
			$('.m-gnb, .m-gnb-bg').hide();
		});

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [handleResize]);

	return (
		<>
			<div className="m-gnb" style={{ display: `${(flag && 'block') || ''}`, right: `${(flag && '0%') || '-100%'}` }}>
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

				<ol className="m-gnb-menu">{children}</ol>
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
