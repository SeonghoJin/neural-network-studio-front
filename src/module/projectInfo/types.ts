import * as actions from './actions'
import { ActionType } from 'typesafe-actions';

export type ProjectInfoActionTypes = ActionType<typeof actions>
export type ProjectInfoState = {
  name: string,
  description: string,
} | null
