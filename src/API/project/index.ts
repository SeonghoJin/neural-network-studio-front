import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import * as queryString from 'querystring';
import {
	GetProjectListParams,
	IGetProjectListParams,
	IProjectContentDto,
	IProjectDto,
	IProjectInfo,
	ProjectConfig,
	ProjectConfigDto,
	Projects,
} from './types';
import graphToLayouts from '../../core/reactFlow/GraphEngine';
import config from '../../config';
import { BlockConfig, BlockConfigDto } from '../../core/reactFlow/block';

const axiosConfig: AxiosRequestConfig = {
	withCredentials: true,
};

export const getPythonCode = async (projectNo: string) => {
	try {
		const response = await axios.get<Blob>(`${config.SERVER_PREFIX}/api/project/${projectNo}/code`, axiosConfig);
		return response.data;
	} catch (e: any) {
		throw new Error(e.message);
	}
};

export const getProject = async (projectNo: string) => {
	const response = await axios.get<IProjectDto>(`${config.SERVER_PREFIX}/api/project/${projectNo}`, axiosConfig);
	const newElements = response.data.content.flowState.elements.map((element) => {
		if (element.data == null) {
			return element;
		}
		return {
			...element,
			data: {
				...element.data,
				param: new BlockConfig(element.data.param as BlockConfigDto),
			},
		};
	});
	response.data.content.flowState.elements = newElements;
	return response.data;
};

export const getProjectConfig = async (projectNo: string) => {
	const response = await axios.get<ProjectConfigDto>(
		`${config.SERVER_PREFIX}/api/project/${projectNo}/config`,
		axiosConfig
	);
	return new ProjectConfig(response.data);
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

export const updateProjectConfig = async (projectNo: string, projectConfig: ProjectConfig) => {
	try {
		const response = await axios.put(
			`${config.SERVER_PREFIX}/api/project/${projectNo}/config`,
			ProjectConfig.toProjectConfigDto(projectConfig),
			axiosConfig
		);
		return response.data;
	} catch (e) {
		if ((e as AxiosError).response?.status !== 200) {
			throw new Error('모델 설정 저장에 실패했습니다. 다시 시도해주세요.');
		}
		throw e;
	}
};

export const updateProjectContent = async (projectNo: string, projectContent: IProjectContentDto) => {
	const newElements = projectContent.flowState.elements.map((element) => {
		if (element.data == null) {
			return element;
		}

		return {
			...element,
			data: {
				...element.data,
				param: BlockConfig.toDto(element.data.param),
			},
		};
	});

	const newProjectContent = {
		...projectContent,
		flowState: {
			...projectContent.flowState,
			elements: newElements,
		},
	};

	const layers = graphToLayouts(newProjectContent.flowState.elements);

	try {
		const response = await axios.put(
			`${config.SERVER_PREFIX}/api/project/${projectNo}/content`,
			{
				...newProjectContent,
				...layers,
			},
			axiosConfig
		);
		return response.data;
	} catch (e) {
		if ((e as AxiosError).isAxiosError && (e as AxiosError).response?.status !== 200) {
			throw new Error('프로젝트 저장에 실패했습니다. 다시 시도해주세요.');
		}
		throw new Error('updateProjectContent Function Error');
	}
};

export const deleteProject = async (projectNo: string) => {
	try {
		const response = await axios.delete(`${config.SERVER_PREFIX}/api/project/${projectNo}`, axiosConfig);
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
