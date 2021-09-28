import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import * as queryString from 'querystring';
import {
	GetProjectListParams,
	IGetProjectListParams,
	IProjectConfig,
	IProjectContentDto,
	IProjectDto,
	IProjectInfo,
	Projects,
} from './types';
import graphToLayouts from '../../core/reactFlow/GraphEngine';
import config from '../../config';

const axiosConfig: AxiosRequestConfig = {
	withCredentials: true,
};

export const getPythonCode = async (projectNo: string) => {
	const response = await axios.get<Blob>(`${config.SERVER_PREFIX}/api/project/${projectNo}/code`, axiosConfig);

	return response.data;
};

export const getProject = async (projectNo: string) => {
	const response = await axios.get<IProjectDto>(`${config.SERVER_PREFIX}/api/project/${projectNo}`, axiosConfig);

	return response.data;
};

export const getProjectConfig = async (projectNo: string) => {
	const response = await axios.get<IProjectConfig>(
		`${config.SERVER_PREFIX}/api/project/${projectNo}/config`,
		axiosConfig
	);
	return response.data;
};

export const getProjectContent = async (projectNo: string) => {
	const response = await axios.get<IProjectContentDto>(
		`${config.SERVER_PREFIX}/api/project/${projectNo}/content`,
		axiosConfig
	);

	return response.data;
};

export const createProject = async (projectInfo: IProjectInfo) => {
	try {
		const response = await axios.post<{ projectNo: string }>(
			`${config.SERVER_PREFIX}/api/project`,
			projectInfo,
			axiosConfig
		);

		return response.data;
	} catch (e) {
		if ((e as AxiosError).response?.status === 422) {
			throw new Error('이미 존재하는 프로젝트 이름입니다.');
		}

		return null;
	}
};

export const updateProjectInfo = async (projectNo: string, projectInfo: IProjectInfo) => {
	try {
		const response = await axios.put(`${config.SERVER_PREFIX}/api/project/${projectNo}/info`, projectInfo, axiosConfig);
		return response.data;
	} catch (e) {
		if ((e as AxiosError).response?.status === 422) {
			throw new Error('이미 존재하는 프로젝트 이름입니다.');
		}
		return null;
	}
};

export const updateProjectConfig = async (projectNo: string, projectConfig: IProjectConfig) => {
	const response = await axios.put(
		`${config.SERVER_PREFIX}/api/project/${projectNo}/config`,
		projectConfig,
		axiosConfig
	);

	return response.data;
};

export const updateProjectContent = async (projectNo: string, projectContent: IProjectContentDto) => {
	let layers = null;
	layers = graphToLayouts(projectContent.flowState.elements);

	try {
		const response = await axios.put(
			`${config.SERVER_PREFIX}/api/project/${projectNo}/content`,
			{
				...projectContent,
				...layers,
			},
			axiosConfig
		);
		return response.data;
	} catch (e) {
		if ((e as AxiosError).isAxiosError && (e as AxiosError).response?.status !== 200) {
			throw new Error('파이썬 코드 추출에 실패했습니다. 다시 시도해주세요.');
		}
		throw new Error('updateProjectContent Function Error');
	}
};

export const deleteProject = async (projectNo: string) => {
	try {
		const response = await axios.delete(`${config.SERVER_PREFIX}/api/project/${projectNo}`);
		return response.data;
	} catch (e: AxiosError | any) {
		if (e.isAxiosError && (e as AxiosError).response?.status === 401) {
			throw new Error('로그인이 필요합니다.');
		} else {
			throw new Error('잘못된 삭제 요청입니다.');
		}
		return null;
	}
};

export const getProjectList = async (params?: IGetProjectListParams) => {
	const uri = `${config.SERVER_PREFIX}/api/projects?${queryString.stringify({
		...new GetProjectListParams(params),
	})}`;

	const response = await axios.get<Projects>(uri, axiosConfig);
	return response.data;
};

export const getProjectRoomNumber = async (projectNo: string | number) => {
	const response = await axios.get<{
		key: string;
	}>(`${config.SERVER_PREFIX}/api/project/${projectNo}/share`, axiosConfig);
	return response.data;
};
