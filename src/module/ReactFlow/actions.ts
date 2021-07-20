import { Elements, FlowElement, FlowExportObject } from 'react-flow-renderer';
import { createStandardAction } from '../../util';
import { ReactFlowState } from './type';
export enum ReactFlowAction {
  setFlowInstance = 'set',
  setElments = 'setElements',
  setPosition = 'setPosition',
  setZoom = 'setZoom',
  setSelectedElements = 'setSelectedElements',
  updateElementData = 'updateElement',
  flowInstance = 'flowInstance',
}

type updateElementDataType = {
  id?: string | null,
  key: string,
  value: any,
}

export const setFlowInstance = createStandardAction(ReactFlowAction.setFlowInstance)<ReactFlowState>();
export const setElements = createStandardAction(ReactFlowAction.setElments)<FlowElement[]>();
export const setPosition = createStandardAction(ReactFlowAction.setPosition)<[number, number]>();
export const setZoom = createStandardAction(ReactFlowAction.setZoom)<number>();
export const setSelectedElements = createStandardAction(ReactFlowAction.setSelectedElements)<Elements | null>();
export const flowInstance = createStandardAction(ReactFlowAction.flowInstance)();
export const updateElementData = createStandardAction(ReactFlowAction.updateElementData)<updateElementDataType>();
