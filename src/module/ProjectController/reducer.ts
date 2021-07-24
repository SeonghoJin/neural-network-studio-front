import { ProjectControllerActionTypes, ProjectControllerState } from './types';
import { createReducer } from 'typesafe-actions';
import { ProjectControllerAction } from './actions';

const initialState : ProjectControllerState = {
  action : null
}

const projectContoller = createReducer<ProjectControllerState, ProjectControllerActionTypes>(
  initialState
, {
    [ProjectControllerAction.GET_PROJECT] : (state) => (
      {action : ProjectControllerAction.GET_PROJECT}
    ),
    [ProjectControllerAction.PUT_PROJECT_CONTENT]: (state) => (
      {action : ProjectControllerAction.PUT_PROJECT_CONTENT}
    ),
    [ProjectControllerAction.PUT_PROJECT_CONFIG]: (state) => ({
      action: ProjectControllerAction.PUT_PROJECT_CONFIG
    }),
    [ProjectControllerAction.GET_PYTHON_CODE]: (state) => ({
      action: ProjectControllerAction.GET_PYTHON_CODE
    }),
    [ProjectControllerAction.GET_PROJECT_CONFIG]: (state) => ({
      action: ProjectControllerAction.GET_PROJECT_CONFIG
    }),
    [ProjectControllerAction.PUT_PROJECT_CONFIG_AND_INFO]: (state) => ({
      action: ProjectControllerAction.PUT_PROJECT_CONFIG_AND_INFO
    }),
    [ProjectControllerAction.INIT_Project_Controller_Action]: (state) => ({
      action: null
    }),
});

export default projectContoller;
