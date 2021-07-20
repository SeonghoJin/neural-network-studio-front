import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { Elements, FlowElement, FlowExportObject } from 'react-flow-renderer';

export type ReactFlowActionTypes = ActionType<typeof actions>

export type ReactFlowState = FlowExportObject & {
  selectedElement: Elements<any>| null
}
