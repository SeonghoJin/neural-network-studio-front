import { Elements } from 'react-flow-renderer';
import { createStandardAction } from '../../util';

export enum ElementAction {
	SET_ELEMENTS = 'SET_ELEMENTS',
	SET_ELEMENT_BY_ID_UPDATE_CONFIG = 'SET_ELEMENT_BY_ID_UPDATE_CONFIG',
	SET_ELEMENT_BY_ID_UPDATE_LABEL = 'SET_ELEMENT_BY_ID_UPDATE_LABEL',
}

export const setElements = createStandardAction(ElementAction.SET_ELEMENTS)<Elements>();
export const setElementByIdAndUpdateConfig = createStandardAction(ElementAction.SET_ELEMENT_BY_ID_UPDATE_CONFIG)<{
	id: string;
	key: string;
	value: string;
}>();
export const setElementByIdAndUpdateLabel = createStandardAction(ElementAction.SET_ELEMENT_BY_ID_UPDATE_LABEL)<{
	id: string;
	label: string;
}>();
