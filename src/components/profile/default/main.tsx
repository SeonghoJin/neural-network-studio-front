import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import style from '../index.module.css';
import useAuthentication from '../../../hooks/useAuthentication';

const ProfileMain = () => {
	const { user } = useAuthentication();
	const profile = user?.profile;
	return (
		<div className={`${style.mainWrapper}`}>
			<header className={style.headerWrapper}>
				<div className={`${style.profile}`}>
					<div className={`${style.profileImage}`}>
						<input className={`${style.invisibleInput}`} type="file" id="uploadImage" name="image" accept={'image/*'} />
						<img src={profile?.profileImage.url} alt="profile" />
					</div>
					<h2>{profile?.name}</h2>)
				</div>
				<div className={`${style.buttons}`}>
					<Link to="/profile/modify" type="button" className={`${style.modifyButton}`}>
						수정
					</Link>
				</div>
			</header>
			<section className={`${style.userInfo}`}>
				<div className={`${style.userMail}`}>
					<FontAwesomeIcon icon={faEnvelope} color="gray" />
					<a href={`mailto:${profile?.email}`}>{profile?.email}</a>
				</div>
				<div className={`${style.userWebsite}`}>
					<FontAwesomeIcon icon={faGlobe} color="gray" />
					<a href={profile?.webSite} target="_blank" rel="noreferrer">
						{profile?.webSite}
					</a>
				</div>
				<div className={`${style.userDescription}`}>
					<p>{profile?.description}</p>
				</div>
			</section>
			<footer>프리셋 목록 들어감</footer>
		</div>
	);
};

export default ProfileMain;
