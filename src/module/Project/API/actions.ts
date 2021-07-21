import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

export enum APIAction{
  PUT_PROJECT_CONFIG = 'putProjectConfig',
  PUT_PROJECT_CONFIG_SUCCESS = 'putProjectConfigSuccess',
  PUT_PROJECT_CONFIG_ERROR = 'putProjectConfigError',
  PUT_PROJECT_CONTENT = 'putProjectContent',
  PUT_PROJECT_CONTENT_SUCCESS = 'putProjectContentSuccess',
  PUT_PROJECT_CONTENT_ERROR = 'putProjectContentError',
}

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

