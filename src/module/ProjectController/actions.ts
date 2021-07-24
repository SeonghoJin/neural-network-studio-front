import { createStandardAction } from '../../util';

export enum ProjectControllerAction{
  INIT_Project_Controller_Action = 'INIT_Project_Controller_Action',
  GET_PROJECT = 'GET_PROJECT',
  GET_PYTHON_CODE = 'GET_PYTHON_CODE',
  GET_PROJECT_CONFIG = 'GET_PROJECT_CONFIG',
  PUT_PROJECT_CONFIG = 'PUT_PROJECT_CONFIG',
  PUT_PROJECT_CONTENT = 'PUT_PROJECT_CONTENT',
  PUT_PROJECT_CONFIG_AND_INFO = 'PUT_PROJECT_CONFIG_AND_INFO',
}

export const getProject = createStandardAction(ProjectControllerAction.GET_PROJECT)();
export const getPythonCode = createStandardAction(ProjectControllerAction.GET_PYTHON_CODE)();
export const putProjectConfig = createStandardAction(ProjectControllerAction.PUT_PROJECT_CONFIG)();
export const putProjectContent = createStandardAction(ProjectControllerAction.PUT_PROJECT_CONTENT)();
export const initProjectControllerAction = createStandardAction(ProjectControllerAction.INIT_Project_Controller_Action)();
export const getProjectConfig = createStandardAction(ProjectControllerAction.GET_PROJECT_CONFIG)();
export const putProjectConfigAndInfo = createStandardAction(ProjectControllerAction.PUT_PROJECT_CONFIG_AND_INFO)();
