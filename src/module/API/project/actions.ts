import { createAsyncAction } from 'typesafe-actions';
import { IProjectConfig, Projects } from '../../../API/project/types';
import { createStandardAction } from '../../../util';

export enum ProjectAPIAction {
	GET_PYTHON_CODE = 'getPythonCode',
	GET_PYTHON_CODE_SUCCESS = 'getPythonCodeSuccess',
	GET_PYTHON_CODE_ERROR = 'getPythonCodeError',
	GET_PROJECT_LIST = 'getProjectList',
	GET_PROJECT_LIST_SUCCESS = 'getProjectListSuccess',
	GET_PROJECT_LIST_ERROR = 'getProjectListError',
}

export const getPythonCodeAsync = createAsyncAction(
	ProjectAPIAction.GET_PYTHON_CODE,
	ProjectAPIAction.GET_PYTHON_CODE_SUCCESS,
	ProjectAPIAction.GET_PYTHON_CODE_ERROR
)<undefined, Blob, string>();

export const getProjectListAsync = createAsyncAction(
	ProjectAPIAction.GET_PROJECT_LIST,
	ProjectAPIAction.GET_PROJECT_LIST_SUCCESS,
	ProjectAPIAction.GET_PROJECT_LIST_ERROR
)<undefined, Projects, string>();
