import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { IProjectDto } from '../../API/project/types';

export enum APIAction{
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
  APIAction.GET_PROJECT,
  APIAction.GET_PROJECT_SUCCESS,
  APIAction.GET_PROJECT_ERROR,
)<undefined, IProjectDto, AxiosError>();

export const putProjectConfigAsync = createAsyncAction(
  APIAction.PUT_PROJECT_CONFIG,
  APIAction.PUT_PROJECT_CONFIG_SUCCESS,
  APIAction.PUT_PROJECT_CONFIG_ERROR,
)<undefined, undefined, AxiosError>();

export const putProjectContentAsync = createAsyncAction(
  APIAction.PUT_PROJECT_CONTENT,
  APIAction.PUT_PROJECT_CONTENT_SUCCESS,
  APIAction.PUT_PROJECT_CONTENT_ERROR,
)<undefined, undefined, AxiosError>();

export const getPythonCodeAsync = createAsyncAction(
  APIAction.GET_PYTHON_CODE,
  APIAction.GET_PTYHON_CODE_SUCCESS,
  APIAction.GET_PYTHON_CODE_ERROR,
)<undefined, string, AxiosError>();


