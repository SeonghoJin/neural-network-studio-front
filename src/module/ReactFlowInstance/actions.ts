import { createStandardAction } from '../../util';
import { FlowExportObject, OnLoadParams } from 'react-flow-renderer';

export enum ReactFlowAction{
  GET_REACTFLOW_INSTANCE = 'getReactFlowInstance',
  SET_REACTFLOW_INSTANCE = 'setReactFlowInstance',
}

export const getReactFlowInstance = createStandardAction(ReactFlowAction.GET_REACTFLOW_INSTANCE)();
export const setReactFlowInstance = createStandardAction(ReactFlowAction.SET_REACTFLOW_INSTANCE)<OnLoadParams>();
