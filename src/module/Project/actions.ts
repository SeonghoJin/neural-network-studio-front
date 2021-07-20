import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { IProjectDto } from '../../API/project/types';

export enum ProjectAction{
  GET_PROJECT = 'getProject',
  GET_PROJECT_SUCCESS = 'getProjectSuccess',
  GET_PROJECT_ERROR = 'getProjectError',
  PUT_PROJECT_CONFIG = 'putProjectConfig',
  PUT_PROJECT_CONFIG_SUCCESS = 'putProjectConfigSuccess',
  PUT_PROJECT_CONFIG_ERROR = 'putProjectConfigError',
  PUT_PROJECT_CONTENT = 'putProjectContent',
  PUT_PROJECT_CONTENT_SUCCESS = 'putProjectContentSuccess',
  PUT_PROJECT_CONTENT_ERROR = 'putProjectContentError',
}

export const getProjectAsync = createAsyncAction(
  ProjectAction.GET_PROJECT,
  ProjectAction.GET_PROJECT_SUCCESS,
  ProjectAction.GET_PROJECT_ERROR,
)<undefined, IProjectDto, AxiosError>();

export const putProjectConfigAsync = createAsyncAction(
  ProjectAction.PUT_PROJECT_CONFIG,
  ProjectAction.PUT_PROJECT_CONFIG_SUCCESS,
  ProjectAction.PUT_PROJECT_CONFIG_ERROR,
)<undefined, undefined, AxiosError>();

export const putProjectContentAsync = createAsyncAction(
  ProjectAction.PUT_PROJECT_CONTENT,
  ProjectAction.PUT_PROJECT_CONTENT_SUCCESS,
  ProjectAction.PUT_PROJECT_CONTENT_ERROR,
)<undefined, undefined, AxiosError>();

