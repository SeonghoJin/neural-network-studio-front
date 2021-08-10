import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { IProjectConfig, IProjectDto, Projects } from '../../../API/project/types';

export type ProjectAPIActionTypes = ActionType<typeof actions>;

export type ProjectAPIState = {
	getPythonCodeResult: {
		error: string | null;
		loading: boolean;
		data: Blob | null;
	};
	putProjectConfigResult: {
		error: null | string;
		loading: boolean;
		data: boolean;
	};
	putProjectContentResult: {
		error: null | string;
		loading: boolean;
		data: boolean;
	};
	deleteProjectResult: {
		error: null | string;
		loading: boolean;
		data: boolean;
	};
	getProjectsResult: {
		error: null | string;
		loading: boolean;
		data: Projects | null;
	};
};
