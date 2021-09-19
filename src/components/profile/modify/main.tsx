import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import { Button, ButtonGroup, makeStyles, TextField } from '@material-ui/core';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import useAuthentication from '../../../hooks/useAuthentication';
import { UserProfile, UserProfileImage } from '../../../API/User/types';
import useUpdateUserProfile from '../../../hooks/useUpdateUserProfile';
import { StaticPath } from '../../PagePathConsts';

const TextFields = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const useStyles = makeStyles({
	'text-field': {
		marginBottom: 5,
		width: 300,
	},
	'button-group': {
		marginTop: '10px',
		alignSelf: 'flex-end',
	},
});

const maxNameLen = 45;
const maxDescriptionLen = 2000;

const DEFAULT_PROFILE_IMAGE = 'https://s3.ap-northeast-2.amazonaws.com/image.nns/default_profile.png';

const ModifyProfileMain = () => {
	const { user } = useAuthentication();
	const { fetch, errorFeedback, loadingFeedback, successFeedback } = useUpdateUserProfile();
	const imageInputRef = useRef<HTMLInputElement | null>(null);
	const [file, setFile] = useState<File | null>(null);
	const [modifiedProfile, setModifiedProfile] = useState<Partial<UserProfile> | null>(user?.profile || null);
	const history = useHistory();

	const classes = useStyles();

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { value, name } = e.target;
			if (name === 'name') {
				if (value.length > maxNameLen) {
					return;
				}
			}
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
		<div className="profile-area">
			<div className="btn-upload">
				<label htmlFor="uploadImage">
					<input ref={imageInputRef} type="file" id="uploadImage" accept={'image/*'} onChange={onChangeImage} />
					<img src={modifiedProfile?.profileImage?.url} alt=" " />
				</label>
			</div>

			<div className="txt-group">
				<TextFields>
					<TextField
						className={classes['text-field']}
						label="이름"
						name="name"
						value={modifiedProfile?.name}
						onChange={onChange}
					/>
					<TextField
						className={classes['text-field']}
						label="이메일"
						name="email"
						value={modifiedProfile?.email}
						onChange={onChange}
					/>
					<TextField
						className={classes['text-field']}
						label="홈페이지"
						name="webSite"
						value={modifiedProfile?.webSite}
						onChange={onChange}
					/>
				</TextFields>
				<textarea
					placeholder="메모를 입력하세요"
					className="txt3"
					name="description"
					maxLength={maxDescriptionLen}
					onChange={onChange}
					value={modifiedProfile?.description}
				/>
				<ButtonGroup className={classes['button-group']}>
					<Button variant="contained" onClick={deleteImage}>
						사진 초기화
					</Button>
					<Button variant="contained" color="primary" onClick={onSave}>
						저장
					</Button>
					<Button
						variant="contained"
						color="secondary"
						onClick={() => {
							history.push(StaticPath.PROFILE);
						}}
					>
						취소
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
};

export default ModifyProfileMain;
