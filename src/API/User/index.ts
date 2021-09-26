import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import config from '../../config';
import { SignUpParams, UserProfile, UserProfileImage, UserProfileToUpdateParams } from './types';

const axiosConfig: AxiosRequestConfig = {
	withCredentials: true,
};

export const signUp = async (signUpParams: SignUpParams) => {
	try {
		const response = await axios.post(`${config.SERVER_PREFIX}/api/user`, signUpParams, axiosConfig);
		return response.data;
	} catch (e: any) {
		if (e.response.status === 422) {
			throw new Error('중복된 아이디입니다.');
		}
		if (e.response.status >= 400) {
			throw new Error('알수없는 에러입니다.');
		}
		return null;
	}
};

export const getUserProfile = async () => {
	const response = await axios.get<UserProfile>(`${config.SERVER_PREFIX}/api/user`, axiosConfig);
	return response.data;
};

export const updateUserProfile = async (userProfileToUpdate: UserProfileToUpdateParams) => {
	const response = await axios.put(`${config.SERVER_PREFIX}/api/user`, userProfileToUpdate, axiosConfig);

	return response.data;
};

export const uploadImage = async (blob: FormData) => {
	const response = await axios.post<UserProfileImage>(`${config.SERVER_PREFIX}/api/image`, blob, axiosConfig);
	return response.data;
};
