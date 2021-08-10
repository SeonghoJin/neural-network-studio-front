import { createAsyncAction } from 'typesafe-actions';
import { IProjectConfig, Projects } from '../../../API/project/types';
import { createStandardAction } from '../../../util';

export enum ProjectAPIAction {
	GET_PYTHON_CODE = 'getPythonCode',
	GET_PYTHON_CODE_SUCCESS = 'getPythonCodeSuccess',
	GET_PYTHON_CODE_ERROR = 'getPythonCodeError',
	PUT_PROJECT_CONFIG = 'putProjectConfig',
	PUT_PROJECT_CONFIG_SUCCESS = 'putProjectConfigSuccess',
	PUT_PROJECT_CONFIG_ERROR = 'putProjectConfigError',
	PUT_PROJECT_INFO_INIT = 'putProjectInfoInit',
	DELETE_PROJECT = 'deleteProject',
	DELETE_PROJECT_SUCCESS = 'deleteProjectSuccess',
	DELETE_PROJECT_ERROR = 'deleteProjectError',
	GET_PROJECT_LIST = 'getProjectList',
	GET_PROJECT_LIST_SUCCESS = 'getProjectListSuccess',
	GET_PROJECT_LIST_ERROR = 'getProjectListError',
}

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

export const deleteProjectAsync = createAsyncAction(
	ProjectAPIAction.DELETE_PROJECT,
	ProjectAPIAction.DELETE_PROJECT_SUCCESS,
	ProjectAPIAction.DELETE_PROJECT_ERROR
)<undefined, undefined, string>();

export const getProjectListAsync = createAsyncAction(
	ProjectAPIAction.GET_PROJECT_LIST,
	ProjectAPIAction.GET_PROJECT_LIST_SUCCESS,
	ProjectAPIAction.GET_PROJECT_LIST_ERROR
)<undefined, Projects, string>();
