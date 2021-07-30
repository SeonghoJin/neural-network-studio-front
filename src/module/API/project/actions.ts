import { createAsyncAction } from 'typesafe-actions';
import { IProjectConfig, IProjectDto } from '../../../API/project/types';
import { createStandardAction } from '../../../util';

export enum ProjectAPIAction {
	GET_PROJECT = 'getProject',
	GET_PROJECT_SUCCESS = 'getProjectSuccess',
	GET_PROJECT_ERROR = 'getProjectError',
	GET_PYTHON_CODE = 'getPythonCode',
	GET_PYTHON_CODE_SUCCESS = 'getPythonCodeSuccess',
	GET_PYTHON_CODE_ERROR = 'getPythonCodeError',
	GET_PROJECT_CONFIG = 'getProjectConfig',
	GET_PROJECT_CONFIG_SUCCESS = 'getProjectConfigSuccess',
	GET_PROJECT_CONFIG_ERROR = 'getProjectConfigError',
	PUT_PROJECT_CONFIG = 'putProjectConfig',
	PUT_PROJECT_CONFIG_SUCCESS = 'putProjectConfigSuccess',
	PUT_PROJECT_CONFIG_ERROR = 'putProjectConfigError',
	PUT_PROJECT_CONTENT = 'putProjectContent',
	PUT_PROJECT_CONTENT_SUCCESS = 'putProjectContentSuccess',
	PUT_PROJECT_CONTENT_ERROR = 'putProjectContentError',
	PUT_PROJECT_INFO_INIT = 'putProjectInfoInit',
	PUT_PROJECT_INFO = 'putProjectInfo',
	PUT_PROJECT_INFO_SUCCESS = 'putProjectInfoSuccess',
	PUT_PROJECT_INFO_ERROR = 'putProjectInfoError',
}

export const getProjectAsync = createAsyncAction(
	ProjectAPIAction.GET_PROJECT,
	ProjectAPIAction.GET_PROJECT_SUCCESS,
	ProjectAPIAction.GET_PROJECT_ERROR
)<undefined, IProjectDto, string>();

export const getProjectConfigAsync = createAsyncAction(
	ProjectAPIAction.GET_PROJECT_CONFIG,
	ProjectAPIAction.GET_PROJECT_CONFIG_SUCCESS,
	ProjectAPIAction.GET_PROJECT_CONFIG_ERROR
)<undefined, IProjectConfig, string>();

export const getPythonCodeAsync = createAsyncAction(
	ProjectAPIAction.GET_PYTHON_CODE,
	ProjectAPIAction.GET_PYTHON_CODE_SUCCESS,
	ProjectAPIAction.GET_PYTHON_CODE_ERROR
)<undefined, Blob, string>();

export const putProjectConfigAsync = createAsyncAction(
	ProjectAPIAction.PUT_PROJECT_CONFIG,
	ProjectAPIAction.PUT_PROJECT_CONFIG_SUCCESS,
	ProjectAPIAction.PUT_PROJECT_CONFIG_ERROR
)<undefined, undefined, string>();

export const putProjectContentAsync = createAsyncAction(
	ProjectAPIAction.PUT_PROJECT_CONTENT,
	ProjectAPIAction.PUT_PROJECT_CONTENT_SUCCESS,
	ProjectAPIAction.PUT_PROJECT_CONTENT_ERROR
)<undefined, undefined, string>();

export const putProjectInfoInit = createStandardAction(ProjectAPIAction.PUT_PROJECT_INFO_INIT)();
export const putProjectInfoAsync = createAsyncAction(
	ProjectAPIAction.PUT_PROJECT_INFO,
	ProjectAPIAction.PUT_PROJECT_INFO_SUCCESS,
	ProjectAPIAction.PUT_PROJECT_INFO_ERROR
)<undefined, undefined, string>();
