import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { IProjectDto } from '../../API/project/types';

export type ProjectActionTypes = ActionType<typeof actions>;

export type ProjectState = {
  error: Error | null;
  loading: boolean;
  data: IProjectDto | null;
};
