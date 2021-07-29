import axios, { AxiosRequestConfig } from 'axios';
import config from '../../config';
import { IProjectConfig, IProjectContentDto, IProjectDto, IProjectInfo } from './types';
import graphToLayouts from "../../core/GraphEngine";

const axiosConfig : AxiosRequestConfig = {
  withCredentials: true
}

export const getPythonCode = async (projectNo: string) => {
  const response = await axios.get<Blob>(
    `/api/project/${projectNo}/code`,
    axiosConfig
  );

  return response.data;
}

export const getProject = async (projectNo:string) => {
  const response = await axios.get<any>(
    `/api/project/${projectNo}`,
      axiosConfig
    );

  console.log(response.data);
  return response.data;
}

export const getProjectConfig = async (projectNo: string) => {
  const response = await axios.get<IProjectConfig>(
    `/api/project/${projectNo}/config`,
    axiosConfig
    );
  console.log(response.data)
  return response.data;
}

export const getProjectContent = async (projectNo: string) => {
  const response = await axios.get<IProjectContentDto>(
    `/api/project/${projectNo}/content`,
    axiosConfig
  );

  return response.data;
}

export const createProject = async (projectInfo : IProjectInfo) => {
  const response = await axios.post<{projectNo: string}>(
    `/api/project`,
    projectInfo,
    axiosConfig
  );

  return response.data;
}

export const updateProjectInfo = async(projectNo: string, projectInfo: IProjectInfo) => {
  const response = await axios.put(
    `/api/project/${projectNo}/info`,
      projectInfo,
    axiosConfig
    );

  return response.data;
}

export const updateProjectConfig = async(projectNo: string, projectConfig: IProjectConfig) => {
  const response = await axios.put(
    `/api/project/${projectNo}/config`,
    projectConfig,
    axiosConfig
  );

  return response.data;
}

export const updateProjectContent = async(projectNo: string, projectContent: IProjectContentDto) => {

  const layers = graphToLayouts(projectContent.flowState.elements);
  console.log(layers);
  const response = await axios.put(
    `/api/project/${projectNo}/content`,
      {
        ...projectContent,
        ...layers,
      },
    axiosConfig,
  );

  return response.data;
}

