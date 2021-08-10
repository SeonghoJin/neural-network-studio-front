import axios, { AxiosRequestConfig } from 'axios';
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
	const response = await axios.post<{ projectNo: string }>(
		`${config.SERVER_PREFIX}/api/project`,
		projectInfo,
		axiosConfig
	);

	return response.data;
};

export const updateProjectInfo = async (projectNo: string, projectInfo: IProjectInfo) => {
	const response = await axios.put(`${config.SERVER_PREFIX}/api/project/${projectNo}/info`, projectInfo, axiosConfig);

	return response.data;
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
	const layers = graphToLayouts(projectContent.flowState.elements);
	const response = await axios.put(
		`${config.SERVER_PREFIX}/api/project/${projectNo}/content`,
		{
			...projectContent,
			...layers,
		},
		axiosConfig
	);

	return response.data;
};

export const deleteProject = async (projectNo: string) => {
	const response = await axios.delete(`${config.SERVER_PREFIX}/api/project/${projectNo}`);
	return response.data;
};

export const getProjectList = async (params?: IGetProjectListParams) => {
	const uri = `${config.SERVER_PREFIX}/api/projects?${queryString.stringify({
		...new GetProjectListParams(params),
	})}`;

	const response = await axios.get<Projects>(uri, axiosConfig);
	return response.data;
};
