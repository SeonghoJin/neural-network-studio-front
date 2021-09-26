import { Elements, FlowElement, Node } from 'react-flow-nns';
import { createStandardAction } from '../../util';
import { BlockMoveDto } from '../../core/Socket/dto/block.move.dto';
import { BlockCreateDto } from '../../core/Socket/dto/block.create.dto';
import { BlockRemoveDto } from '../../core/Socket/dto/block.remove.dto';
import { EdgeCreateDto } from '../../core/Socket/dto/edge.create.dto';
import { EdgeRemoveDto } from '../../core/Socket/dto/edge.remove.dto';
import { BlockConfigChangeDto } from '../../core/Socket/dto/block.config.change.dto';

export enum ElementAction {
	SET_ELEMENTS = 'SET_ELEMENTS',
	ADD_BLOCK = 'ADD_BLOCK',
	CHANGE_BLOCK_DATA = 'CHANGE_BLOCK_DATE',
	REMOVE_BLOCK = 'REMOVE_BLOCK',
	REMOVE_EDGE = 'REMOVE_EDGE',
	SET_ELEMENT_BY_ID_UPDATE_CONFIG = 'SET_ELEMENT_BY_ID_UPDATE_CONFIG',
	SET_ELEMENT_BY_ID_UPDATE_LABEL = 'SET_ELEMENT_BY_ID_UPDATE_LABEL',
	SET_ELEMENT_BY_ID_UPDATE_POSITION = 'SET_ELEMENT_BY_ID_UPDATE_POSITION',
}

export const setElements = createStandardAction(ElementAction.SET_ELEMENTS)<Elements | ((els: Elements) => Elements)>();
export const addBlock = createStandardAction(ElementAction.ADD_BLOCK)<BlockCreateDto>();
export const removeBlock = createStandardAction(ElementAction.REMOVE_BLOCK)<BlockRemoveDto>();
export const setElementByIdAndUpdatePosition = createStandardAction(
	ElementAction.SET_ELEMENT_BY_ID_UPDATE_POSITION
)<BlockMoveDto>();
export const removeEdge = createStandardAction(ElementAction.REMOVE_EDGE)<EdgeRemoveDto>();

export const setElementByIdAndUpdateConfig = createStandardAction(ElementAction.SET_ELEMENT_BY_ID_UPDATE_CONFIG)<{
	id: string;
	key: string;
	value: string;
}>();
export const setElementByIdAndUpdateLabel = createStandardAction(ElementAction.SET_ELEMENT_BY_ID_UPDATE_LABEL)<{
	id: string;
	label: string;
}>();
