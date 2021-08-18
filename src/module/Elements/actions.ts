import { Elements } from 'react-flow-renderer';
import { createStandardAction } from '../../util';
import { MoveBlockBaseData } from '../../core/Project/share/SocketEvent';

export enum ElementAction {
	SET_ELEMENTS = 'SET_ELEMENTS',
	SET_ELEMENT_BY_ID_UPDATE_CONFIG = 'SET_ELEMENT_BY_ID_UPDATE_CONFIG',
	SET_ELEMENT_BY_ID_UPDATE_LABEL = 'SET_ELEMENT_BY_ID_UPDATE_LABEL',
	SET_ELEMENT_BY_ID_UPDATE_POSITION = 'SET_ELEMENT_BY_ID_UPDATE_POSITION',
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
export const setElementByIdAndUpdatePosition = createStandardAction(
	ElementAction.SET_ELEMENT_BY_ID_UPDATE_POSITION
)<MoveBlockBaseData>();
