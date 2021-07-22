import { ActionType } from "typesafe-actions";
import * as actions from './actions'
import { IProjectConfig } from '../../core/project/config';

export type ProjectConfigActionTypes = ActionType<typeof actions>
export type ProjectConfigState = IProjectConfig;
