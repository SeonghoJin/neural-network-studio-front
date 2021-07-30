import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ProjectInfoActionTypes = ActionType<typeof actions>;
export type ProjectInfoState = {
	name: string;
	description: string;
	aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa;
} | null;
