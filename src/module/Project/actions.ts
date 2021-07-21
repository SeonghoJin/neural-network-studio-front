import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { IProjectDto } from '../../API/project/types';

export enum ProjectAction{
  GET_PROJECT = 'getProject',
  GET_PROJECT_SUCCESS = 'getProjectSuccess',
  GET_PROJECT_ERROR = 'getProjectError',
}

export const getProjectAsync = createAsyncAction(
  ProjectAction.GET_PROJECT,
  ProjectAction.GET_PROJECT_SUCCESS,
  ProjectAction.GET_PROJECT_ERROR,
)<undefined, IProjectDto, AxiosError>();
