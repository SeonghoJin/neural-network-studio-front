import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faEdit, faGlobe, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from '../index.module.css';
import useAuthentication from '../../../hooks/useAuthentication';
import { UserProfile, UserProfileImage } from '../../../API/User/types';
import useUpdateUserProfile from '../../../hooks/useUpdateUserProfile';

const maxNameLen = 45;
const maxDescriptionLen = 2000;

const DEFAULT_PROFILE_IMAGE = 'https://s3.ap-northeast-2.amazonaws.com/image.nns/default_profile.png';

const ModifyProfileMain = () => {
	const { user } = useAuthentication();
	const { fetch, errorFeedback, loadingFeedback, successFeedback } = useUpdateUserProfile();
	const imageInputRef = useRef<HTMLInputElement | null>(null);
	const [file, setFile] = useState<File | null>(null);
	const [modifiedProfile, setModifiedProfile] = useState<Partial<UserProfile> | null>(user?.profile || null);

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { value, name } = e.target;
			setModifiedProfile({
				...modifiedProfile,
				[name]: value,
			});
		},
		[modifiedProfile]
	);

	const onChangeImage = useCallback(() => {
		const inputNode = imageInputRef.current as HTMLInputElement;
		const image = (inputNode.files && inputNode.files[0]) || null;
		if (!image) {
			return;
		}
		const url = URL.createObjectURL(image);
		setModifiedProfile(() => ({
			...modifiedProfile,
			profileImage: {
				...(modifiedProfile?.profileImage as UserProfileImage),
				url,
			},
		}));
		setFile(image);
	}, [modifiedProfile]);

	const deleteImage = useCallback(() => {
		setModifiedProfile({
			...modifiedProfile,
			profileImage: {
				id: 0,
				url: DEFAULT_PROFILE_IMAGE,
			},
		});
		setFile(null);
	}, [modifiedProfile]);

	const onSave = useCallback(async () => {
		const { email, description, webSite, name } = modifiedProfile as UserProfile;
		const id = modifiedProfile?.profileImage?.id as number;
		await fetch({
			name,
			blob: file,
			email,
			webSite,
			description,
			id,
		});
	}, [fetch, file, modifiedProfile]);

	return (
		<div className={`${style.mainWrapper}`}>
			<header className={style.headerWrapper}>
				<div className={`${style.profile}`}>
					<div className={`${style.profileImage}`}>
						<button className={`${style.uploadImage}`} type="button">
							<label htmlFor="uploadImage">
								<FontAwesomeIcon icon={faEdit} />
								<span>edit</span>
								<input
									ref={imageInputRef}
									className={`${style.invisibleInput}`}
									type="file"
									id="uploadImage"
									accept={'image/*'}
									onChange={onChangeImage}
								/>
							</label>
						</button>
						<button type="button" className={`${style.uploadImage} ${style.deleteImg}`} onClick={deleteImage}>
							<FontAwesomeIcon icon={faTimes} />
						</button>
						<img src={modifiedProfile?.profileImage?.url} alt="profile" />
					</div>
					<input
						name="name"
						className={`${style.modifyName}`}
						defaultValue={modifiedProfile?.name}
						onChange={onChange}
						maxLength={maxNameLen}
					/>
				</div>
				<div className={`${style.buttons}`}>
					<Link to="/profile" type="button" className={`${style.modifyButton}`}>
						취소
					</Link>
					<button type="button" className={`${style.modifyButton}`} onClick={onSave}>
						저장
					</button>
				</div>
			</header>
			<section className={`${style.userInfo}`}>
				<div className={`${style.userMail}`}>
					<FontAwesomeIcon icon={faEnvelope} color="gray" />
					<input
						name="email"
						className={`${style.modifyInput}`}
						defaultValue={modifiedProfile?.email}
						onChange={onChange}
					/>
				</div>
				<div className={`${style.userWebsite}`}>
					<FontAwesomeIcon icon={faGlobe} color="gray" />
					<input
						name="webSite"
						className={`${style.modifyInput}`}
						defaultValue={modifiedProfile?.webSite}
						onChange={onChange}
					/>
				</div>
				<div className={`${style.userDescription}`}>
					<textarea
						className={`${style.modifyTextarea}`}
						defaultValue={modifiedProfile?.description}
						onChange={onChange}
						maxLength={maxDescriptionLen}
						name="description"
					/>
				</div>
			</section>
			<footer>프리셋 목록 들어감</footer>
			{errorFeedback}
			{loadingFeedback}
			{successFeedback}
		</div>
	);
};

export default ModifyProfileMain;
