import { ActionType } from 'typesafe-actions';
import { OnLoadParams } from 'react-flow-renderer';
import * as actions from './actions';

export type ReactFlowInstanceActionType = ActionType<typeof actions>;
export type ReactFlowInstance = {
	instance: OnLoadParams | null;
};
