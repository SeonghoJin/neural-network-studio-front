import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { IProjectDto } from '../../../API/project/types';

export enum ProjectAPIAction{
  GET_PROJECT = 'getProject',
  GET_PROJECT_SUCCESS = 'getProjectSuccess',
  GET_PROJECT_ERROR = 'getProjectError',
  PUT_PROJECT_CONFIG = 'putProjectConfig',
  PUT_PROJECT_CONFIG_SUCCESS = 'putProjectConfigSuccess',
  PUT_PROJECT_CONFIG_ERROR = 'putProjectConfigError',
  PUT_PROJECT_CONTENT = 'putProjectContent',
  PUT_PROJECT_CONTENT_SUCCESS = 'putProjectContentSuccess',
  PUT_PROJECT_CONTENT_ERROR = 'putProjectContentError',
  GET_PYTHON_CODE = 'getPtyhonCode',
  GET_PTYHON_CODE_SUCCESS = 'getPythonCodeSuccess',
  GET_PYTHON_CODE_ERROR = 'getPythonCodeError',
}

export const getProjectAsync = createAsyncAction(
  ProjectAPIAction.GET_PROJECT,
  ProjectAPIAction.GET_PROJECT_SUCCESS,
  ProjectAPIAction.GET_PROJECT_ERROR,
)<undefined, IProjectDto, AxiosError>();

export const putProjectConfigAsync = createAsyncAction(
  ProjectAPIAction.PUT_PROJECT_CONFIG,
  ProjectAPIAction.PUT_PROJECT_CONFIG_SUCCESS,
  ProjectAPIAction.PUT_PROJECT_CONFIG_ERROR,
)<undefined, undefined, AxiosError>();

export const putProjectContentAsync = createAsyncAction(
  ProjectAPIAction.PUT_PROJECT_CONTENT,
  ProjectAPIAction.PUT_PROJECT_CONTENT_SUCCESS,
  ProjectAPIAction.PUT_PROJECT_CONTENT_ERROR,
)<undefined, undefined, AxiosError>();

export const getPythonCodeAsync = createAsyncAction(
  ProjectAPIAction.GET_PYTHON_CODE,
  ProjectAPIAction.GET_PTYHON_CODE_SUCCESS,
  ProjectAPIAction.GET_PYTHON_CODE_ERROR,
)<undefined, string, AxiosError>();


