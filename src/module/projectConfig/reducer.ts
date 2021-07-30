import { ProjectConfigActionTypes, ProjectConfigState } from './types';
import { createReducer } from 'typesafe-actions';
import { ProjectConfigAction } from './actions';

const initialState : ProjectConfigState = {
  optimizer: "adam",
  learning_rate: 0.001,
  loss: "sparse_categorical_crossentropy",
  metrics: ["accuracy"],
  batch_size: 32,
  epochs: 10
}

const projectConfig = createReducer<ProjectConfigState, ProjectConfigActionTypes>(
  initialState,
  {
    [ProjectConfigAction.SET_PROJECT_CONFIG] : (state, action) => ({
        ...state,
        ...action.payload
    })
  }
)

export default projectConfig
