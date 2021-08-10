import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../index';
import { ProjectAPIActionTypes } from './types';
import { deleteProjectAsync, getProjectListAsync, getPythonCodeAsync, putProjectConfigAsync } from './actions';
import { deleteProject, getProjectList, getPythonCode, updateProjectConfig } from '../../../API/project';
import { IGetProjectListParams, IProjectConfig, Projects } from '../../../API/project/types';

export function getPythonCodeThunk(
	projectNo: string
): ThunkAction<Promise<Blob | null>, RootState, null, ProjectAPIActionTypes> {
	return async (dispatch) => {
		const { request, success, failure } = getPythonCodeAsync;
		dispatch(request());
		try {
			const pythonCode = await getPythonCode(projectNo);
			dispatch(success(pythonCode));
			return pythonCode;
		} catch (e) {
			dispatch(failure(e.message));
			return null;
		}
	};
}

export function putProjectConfigThunk(
	projectNo: string,
	projectConfig: IProjectConfig
): ThunkAction<Promise<boolean>, RootState, null, ProjectAPIActionTypes> {
	return async (dispatch) => {
		const { request, success, failure } = putProjectConfigAsync;
		dispatch(request());
		try {
			await updateProjectConfig(projectNo, projectConfig);
			dispatch(success());
			return true;
		} catch (e) {
			dispatch(failure(e.message));
			return false;
		}
	};
}

export const deleteProjectThunk = (
	projectNo: string
): ThunkAction<Promise<boolean>, RootState, null, ProjectAPIActionTypes> => {
	return async (dispatch) => {
		const { request, success, failure } = deleteProjectAsync;
		dispatch(request());
		try {
			await deleteProject(projectNo);
			dispatch(success());
			return true;
		} catch (e) {
			dispatch(failure(e.message));
			return false;
		}
	};
};

export const getProjectsThunk = (
	params?: IGetProjectListParams
): ThunkAction<Promise<Projects | null>, RootState, null, ProjectAPIActionTypes> => {
	return async (dispatch) => {
		const { request, success, failure } = getProjectListAsync;
		dispatch(request());

		try {
			const projects = await getProjectList(params);
			dispatch(success(projects));
			return projects;
		} catch (e) {
			dispatch(failure(e.message));
			return null;
		}
	};
};
