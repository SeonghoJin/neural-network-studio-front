import { createReducer } from 'typesafe-actions';
import { ProjectAPIActionTypes, ProjectAPIState } from './types';
import { ProjectAPIAction } from './actions';

const initialState: ProjectAPIState = {
	getPythonCodeResult: {
		loading: false,
		data: null,
		error: null,
	},
	getProjectResult: {
		loading: false,
		data: null,
		error: null,
	},
	getProjectConfigResult: {
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
	putProjectInfoResult: {
		loading: false,
		data: false,
		error: null,
	},
};

const projectApi = createReducer<ProjectAPIState, ProjectAPIActionTypes>(initialState, {
	[ProjectAPIAction.GET_PROJECT]: (state) => ({
		...state,
		getProjectResult: {
			loading: true,
			error: null,
			data: null,
		},
	}),
	[ProjectAPIAction.GET_PROJECT_SUCCESS]: (state, action) => ({
		...state,
		getProjectResult: {
			loading: false,
			error: null,
			data: action.payload,
		},
	}),
	[ProjectAPIAction.GET_PROJECT_ERROR]: (state, action) => ({
		...state,
		getProjectResult: {
			loading: false,
			error: action.payload,
			data: null,
		},
	}),
	[ProjectAPIAction.PUT_PROJECT_CONFIG]: (state) => ({
		...state,
		putProjectConfigResult: {
			loading: true,
			error: null,
			data: false,
		},
	}),
	[ProjectAPIAction.PUT_PROJECT_CONFIG_SUCCESS]: (state) => ({
		...state,
		putProjectConfigResult: {
			loading: true,
			error: null,
			data: true,
		},
	}),
	[ProjectAPIAction.PUT_PROJECT_CONFIG_ERROR]: (state, action) => ({
		...state,
		putProjectConfigResult: {
			loading: true,
			error: action.payload,
			data: false,
		},
	}),
	[ProjectAPIAction.PUT_PROJECT_CONTENT]: (state) => ({
		...state,
		putProjectContentResult: {
			loading: true,
			error: null,
			data: false,
		},
	}),
	[ProjectAPIAction.PUT_PROJECT_CONTENT_SUCCESS]: (state) => ({
		...state,
		putProjectContentResult: {
			loading: false,
			error: null,
			data: true,
		},
	}),
	[ProjectAPIAction.PUT_PROJECT_CONTENT_ERROR]: (state, action) => ({
		...state,
		putProjectContentResult: {
			loading: false,
			error: action.payload,
			data: false,
		},
	}),
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
	[ProjectAPIAction.GET_PROJECT_CONFIG]: (state) => ({
		...state,
		getProjectConfigResult: {
			loading: true,
			error: null,
			data: null,
		},
	}),
	[ProjectAPIAction.GET_PROJECT_CONFIG_SUCCESS]: (state, action) => ({
		...state,
		getProjectConfigResult: {
			loading: false,
			error: null,
			data: action.payload,
		},
	}),
	[ProjectAPIAction.GET_PROJECT_CONFIG_ERROR]: (state, action) => ({
		...state,
		getProjectConfigResult: {
			loading: false,
			error: action.payload,
			data: null,
		},
	}),
	[ProjectAPIAction.PUT_PROJECT_INFO_INIT]: (state) => ({
		...state,
		putProjectInfoResult: {
			loading: false,
			error: null,
			data: false,
		},
	}),
	[ProjectAPIAction.PUT_PROJECT_INFO]: (state) => ({
		...state,
		putProjectInfoResult: {
			loading: false,
			error: null,
			data: false,
		},
	}),
	[ProjectAPIAction.PUT_PROJECT_INFO_SUCCESS]: (state) => ({
		...state,
		putProjectInfoResult: {
			loading: false,
			error: null,
			data: true,
		},
	}),
	[ProjectAPIAction.PUT_PROJECT_INFO_ERROR]: (state, action) => ({
		...state,
		putProjectInfoResult: {
			loading: false,
			error: action.payload,
			data: false,
		},
	}),
});

export default projectApi;
