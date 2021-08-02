import axios, { AxiosRequestConfig } from 'axios';
import { LoginParams } from './types';

const axiosConfig: AxiosRequestConfig = {
	withCredentials: true,
};

export const login = async (loginRequest: LoginParams) => {
	const response = await axios.post('/api/login', loginRequest, axiosConfig);
	return response.data;
};

export const logout = async () => {
	const response = await axios.delete('/api/logout', axiosConfig);
	return response.data;
};
