import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { IProjectDto } from '../../../API/project/types';
import { IProjectConfig } from '../../../core/project/config';

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
  getProjectConfigResult: {
    error: string | null;
    loading: boolean;
    data: IProjectConfig | null;
  }
  putProjectConfigResult : {
    error : null | string,
    loading: boolean,
    data: boolean
  },
  putProjectContentResult: {
    error : null | string
    loading: boolean,
    data: boolean
  },
};
