import axios from 'axios';
import config from '../../config';
import { IProjectConfig, IProjectContentDto, IProjectDto } from './types';

export const getPythonCode = async (projectNo: string) => {
  const response = await axios.get<Blob>(
    config.SERVER_PREFIX+`/api/project/${projectNo}/code`
  );

  return response.data;
}

export const getProject = async (projectNo:string) => {
  const response = await axios.get<IProjectDto>(
    config.SERVER_PREFIX+`/api/project/${projectNo}`);

  return response.data;
}

export const getProjectConfig = async (projectNo: string) => {
  const response = await axios.get<IProjectConfig>(
    config.SERVER_PREFIX+`/api/project/${projectNo}/config`);

  return response.data;
}

export const getProjectContent = async (projectNo: string) => {
  const response = await axios.get<IProjectContentDto>(
    config.SERVER_PREFIX+`/api/project/${projectNo}/content`
  );

  return response.data;
}

export const createProject = async (name: string, description: string) => {
  const response = await axios.post<{projectNo: string}>(
    config.SERVER_PREFIX+`/api/project`, {
      name: name,
      description: description,
    }
  );

  return response.data;
}

export const updateProjectInfo = async(projectNo: string, name: string, description: string) => {
  const response = await axios.put(config.SERVER_PREFIX+`/api/project/${projectNo}/info`, {
    name: name,
    description: description,
  });

  return response.data;
}

export const updateProjectConfig = async(projectNo: string, projectConfig: IProjectConfig) => {
  const response = await axios.put(
    config.SERVER_PREFIX+`/api/project/${projectNo}/config`,
    projectConfig);

  return response.data;
}

export const updateProjectContent = async(projectNo: string, projectContent: IProjectContentDto) => {
  const response = await axios.put(
    config.SERVER_PREFIX+`/api/project/${projectNo}/content`,
    projectContent
  );
}

