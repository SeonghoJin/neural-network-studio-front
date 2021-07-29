import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { OnLoadParams } from 'react-flow-renderer';

export type ReactFlowInstanceActionType = ActionType<typeof actions>;
export type ReactFlowInstance = {
  instance: OnLoadParams | null
}
