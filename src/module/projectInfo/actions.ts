import { createStandardAction } from '../../util';
import { IProjectInfo } from '../../API/project/types';

export enum ProjectInfoAction  {
  SET_PROJECT_INFO = 'SET_PROJECT_INFO',
}

export const setProjectInfo = createStandardAction(
  ProjectInfoAction.SET_PROJECT_INFO
)<IProjectInfo>();
