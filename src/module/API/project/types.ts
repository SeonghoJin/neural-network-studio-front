import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { IProjectDto } from '../../../API/project/types';

export type ProjectAPIActionTypes = ActionType<typeof actions>;

export type ProjectAPIState = {
  getPythonCodeResult: {
    error: string | null,
    loading: boolean,
    data: Blob| null,
  },
  getProjectResult: {
    error: string | null;
    loading: boolean;
    data: IProjectDto | null;
  },
  putProjectConfigResult : {
    error : null | string,
    loading: boolean,
    result: {
      data: null,
      check: boolean
    } | null
  },
  putProjectContentResult: {
    error : null | string
    loading: boolean,
    result: {
      data: null,
      check: boolean,
    } | null
  },
};
