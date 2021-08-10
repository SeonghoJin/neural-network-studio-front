import { createReducer } from 'typesafe-actions';
import { ProjectAPIActionTypes, ProjectAPIState } from './types';
import { ProjectAPIAction } from './actions';

const initialState: ProjectAPIState = {
	getPythonCodeResult: {
		loading: false,
		data: null,
		error: null,
	},
	putProjectConfigResult: {
		loading: false,
		data: false,
		error: null,
	},
	putProjectContentResult: {
		loading: false,
		data: false,
		error: null,
	},
	deleteProjectResult: {
		loading: false,
		data: false,
		error: null,
	},
	getProjectsResult: {
		loading: false,
		data: null,
		error: null,
	},
};

const projectApi = createReducer<ProjectAPIState, ProjectAPIActionTypes>(initialState, {
	[ProjectAPIAction.GET_PYTHON_CODE]: (state) => ({
		...state,
		getPythonCodeResult: {
			loading: true,
			error: null,
			data: null,
		},
	}),
	[ProjectAPIAction.GET_PYTHON_CODE_SUCCESS]: (state, action) => ({
		...state,
		getPythonCodeResult: {
			loading: false,
			error: null,
			data: action.payload,
		},
	}),
	[ProjectAPIAction.GET_PYTHON_CODE_ERROR]: (state, action) => ({
		...state,
		getPythonCodeResult: {
			loading: false,
			error: action.payload,
			data: null,
		},
	}),
	[ProjectAPIAction.GET_PROJECT_LIST]: (state) => ({
		...state,
		getProjectsResult: {
			loading: true,
			error: null,
			data: null,
		},
	}),
	[ProjectAPIAction.GET_PROJECT_LIST_SUCCESS]: (state, action) => ({
		...state,
		getProjectsResult: {
			loading: false,
			error: null,
			data: action.payload,
		},
	}),
	[ProjectAPIAction.GET_PROJECT_LIST_ERROR]: (state, action) => ({
		...state,
		getProjectsResult: {
			loading: false,
			error: action.payload,
			data: null,
		},
	}),
});

export default projectApi;
