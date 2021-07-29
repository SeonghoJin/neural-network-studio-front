import axios, { AxiosRequestConfig } from 'axios';
import config from '../../config';
import { IProjectConfig, IProjectContentDto, IProjectDto, IProjectInfo } from './types';
import convertGraphBeforeRun from "../../core/GraphEngine";
import graphToLayouts from "../../core/GraphEngine";

const axiosConfig : AxiosRequestConfig = {
  withCredentials: true
}

export const getPythonCode = async (projectNo: string) => {
  const response = await axios.get<Blob>(
    config.SERVER_PREFIX+`/api/project/${projectNo}/code`,
    axiosConfig
  );

  return response.data;
}

export const getProject = async (projectNo:string) => {
  const response = await axios.get<any>(
    config.SERVER_PREFIX+`/api/project/${projectNo}`,
      axiosConfig
    );

  console.log(response.data);
  return response.data;
}

export const getProjectConfig = async (projectNo: string) => {
  const response = await axios.get<IProjectConfig>(
    config.SERVER_PREFIX+`/api/project/${projectNo}/config`,
    axiosConfig
    );
  console.log(response.data)
  return response.data;
}

export const getProjectContent = async (projectNo: string) => {
  const response = await axios.get<IProjectContentDto>(
    config.SERVER_PREFIX+`/api/project/${projectNo}/content`,
    axiosConfig
  );

  return response.data;
}

export const createProject = async (projectInfo : IProjectInfo) => {
  const response = await axios.post<{projectNo: string}>(
    config.SERVER_PREFIX+`/api/project`,
    projectInfo,
    axiosConfig
  );

  return response.data;
}

export const updateProjectInfo = async(projectNo: string, projectInfo: IProjectInfo) => {
  const response = await axios.put(
    config.SERVER_PREFIX+`/api/project/${projectNo}/info`,
      projectInfo,
    axiosConfig
    );

  return response.data;
}

export const updateProjectConfig = async(projectNo: string, projectConfig: IProjectConfig) => {
  const response = await axios.put(
    config.SERVER_PREFIX+`/api/project/${projectNo}/config`,
    projectConfig,
    axiosConfig
  );

  return response.data;
}

export const updateProjectContent = async(projectNo: string, projectContent: IProjectContentDto) => {

  const layers = graphToLayouts(projectContent.flowState.elements);
  const response = await axios.put(
    config.SERVER_PREFIX+`/api/project/${projectNo}/content`,
      {
        ...projectContent,
        ...layers,
      },
    axiosConfig,
  );

  return response.data;
}

