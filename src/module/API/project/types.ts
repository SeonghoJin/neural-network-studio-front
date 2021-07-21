import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { IProjectDto } from '../../../API/project/types';

export type ProjectAPIActionTypes = ActionType<typeof actions>;

export type ProjectAPIState = {
  getPythonCodeResult: {
    error: Error | null,
    loading: boolean,
    data: string | null,
  },
  getProjectResult: {
    error: Error | null;
    loading: boolean;
    data: IProjectDto | null;
  },
  putProjectConfigResult : {
    error : null | Error,
    loading: boolean,
    result: {
      data: null,
      check: boolean
    } | null
  },
  putProjectContentResult: {
    error : null | Error
    loading: boolean,
    result: {
      data: null,
      check: boolean,
    } | null
  },
};
