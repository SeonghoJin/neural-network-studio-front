import * as actions from './actions'
import { ActionType } from 'typesafe-actions';

export type ProjectControllerActionTypes = ActionType<typeof actions>
export type ProjectControllerState = {
  action: string | null,
}
