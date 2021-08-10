import axios, { AxiosRequestConfig } from 'axios';
import config from '../../config';
import { LoginParams } from './types';

const axiosConfig: AxiosRequestConfig = {
	withCredentials: true,
};

export const login = async (loginRequest: LoginParams) => {
	const response = await axios.post(`${config.SERVER_PREFIX}/api/login`, loginRequest, axiosConfig);
	return response.data;
};

export const logout = async () => {
	const response = await axios.delete(`${config.SERVER_PREFIX}/api/logout`, axiosConfig);
	return response.data;
};
