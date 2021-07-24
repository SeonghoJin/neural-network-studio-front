import { createStandardAction } from '../../util';
import { ProjectInfoState } from './types';

export enum ProjectInfoAction  {
  SET_PROJECT_Info = 'SET_PROJECT_INFO',
}

export const setProjectInfo = createStandardAction(
  ProjectInfoAction.SET_PROJECT_Info
)<ProjectInfoState>();
