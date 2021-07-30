import { createReducer } from 'typesafe-actions';
import { ProjectInfoActionTypes, ProjectInfoState } from './types';
import { ProjectInfoAction } from './actions';

const initialState = null;

const projectInfo = createReducer<ProjectInfoState, ProjectInfoActionTypes>(initialState, {
	[ProjectInfoAction.SET_PROJECT_INFO]: (state, action) => {
		return {
			...state,
			...action.payload,
		};
	},
});

export default projectInfo;
