import { IProjectConfig } from '../../API/project/types';
import { createStandardAction } from '../../util';

export enum ProjectConfigAction  {
  SET_PROJECT_CONFIG = 'SET_PROJECT_CONFIG',
}

export const setProjectConfig = createStandardAction(
  ProjectConfigAction.SET_PROJECT_CONFIG
)<IProjectConfig>();
