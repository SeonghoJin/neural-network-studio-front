import { ActionType } from "typesafe-actions";
import { IProjectConfig } from "../../API/project/types";
import * as actions from './actions'

export type ProjectConfigActionTypes = ActionType<typeof actions>
export type ProjectConfigState = IProjectConfig;
