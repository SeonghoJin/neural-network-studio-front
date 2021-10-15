import React from 'react';
import { Link } from 'react-router-dom';
import useAuthentication from '../../../hooks/useAuthentication';
import icoEdit2 from '../../../static/img/ico_edit2.png';
import icoEmail from '../../../static/img/ico_email1.png';
import icoHomepage from '../../../static/img/ico_homepage1.png';

const ProfileMain = () => {
	const { user } = useAuthentication();
	const profile = user?.profile;
	return (
		<div className="profile-area">
			<div className="btn-upload">
				<label htmlFor="upload">
					<img src={user?.profile?.profileImage.url} alt=" " />
				</label>
			</div>

			<div className="txt-group">
				<div className="txt1">
					{profile?.name}
					<Link to="/profile/modify" type="button">
						<img src={icoEdit2} alt=" " />
					</Link>
				</div>
				<div className="txt2">
					<img src={icoEmail} alt="이메일" />
					<a href={`mailto:${profile?.email}`}>{profile?.email || '없음'}</a>
				</div>
				<div className="txt2">
					<img src={icoHomepage} alt="홈페이지" />
					<a href={`https://${profile?.webSite}`} target="_blank" rel="noreferrer">
						{profile?.webSite || '없음'}
					</a>
				</div>
				<div className="txt3">{user?.profile?.description}</div>
			</div>
		</div>
	);
};

export default ProfileMain;
