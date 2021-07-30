import { v4 as uuidv4 } from 'uuid';
import { deprecated } from 'typesafe-actions';

export const getId = (): string => {
	const id = `${uuidv4()}`;
	return id.replaceAll('-', '');
};

export const getNodeId = (): string => {
	const id = `node_${getId()}`;
	return id;
};

export const { createStandardAction } = deprecated;
