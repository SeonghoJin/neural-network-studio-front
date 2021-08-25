import { Elements, FlowElement } from 'react-flow-renderer';
import { createStandardAction } from '../../util';
import { MoveBlockBaseData } from '../../core/Socket/SocketEvent';

export enum ElementAction {
	SET_ELEMENTS = 'SET_ELEMENTS',
	ADD_ELEMENT = 'ADD_ELEMENT',
	ADD_EDGE = 'ADD_EDGE',
	REMOVE_ELEMENTS = 'REMOVE_ELEMENT',
	SET_ELEMENT_BY_ID_UPDATE_CONFIG = 'SET_ELEMENT_BY_ID_UPDATE_CONFIG',
	SET_ELEMENT_BY_ID_UPDATE_LABEL = 'SET_ELEMENT_BY_ID_UPDATE_LABEL',
	SET_ELEMENT_BY_ID_UPDATE_POSITION = 'SET_ELEMENT_BY_ID_UPDATE_POSITION',
}

export const setElements = createStandardAction(ElementAction.SET_ELEMENTS)<Elements>();
export const addElement = createStandardAction(ElementAction.ADD_ELEMENT)<FlowElement>();
export const removeElements = createStandardAction(ElementAction.REMOVE_ELEMENTS)<Elements>();
export const addEdge = createStandardAction(ElementAction.ADD_EDGE)<FlowElement>();
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
