import { createAsyncAction } from 'typesafe-actions';
import { IProjectConfig } from '../../../core/project/config';
import { AxiosError } from 'axios';

export enum getPythonCodeAction{
  GET_PYTHON_CODE = 'getPtyhonCode',
  GET_PTYHON_CODE_SUCCESS = 'getPythonCodeSuccess',
  GET_PYTHON_CODE_ERROR = 'getPythonCodeError',
}

export const getPythonCodeAsync = createAsyncAction(
  getPythonCodeAction.GET_PYTHON_CODE,
  getPythonCodeAction.GET_PTYHON_CODE_SUCCESS,
  getPythonCodeAction.GET_PYTHON_CODE_ERROR,
)<undefined, string, AxiosError>();


