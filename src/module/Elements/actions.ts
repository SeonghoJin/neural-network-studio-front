import { Elements } from 'react-flow-renderer';
import { createStandardAction } from '../../util';

export enum ElementAction {
  SET_ELEMENTS = 'SET_ELEMENTS',
  SET_ELEMENT_BY_ID = 'SET_ELEMENT_BY_ID',
};

export const setElements = createStandardAction(ElementAction.SET_ELEMENTS)<Elements>();
export const setElementById = createStandardAction(ElementAction.SET_ELEMENT_BY_ID)<{
  id: string,
  key: string,
  value: string,
}>();
