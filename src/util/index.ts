import { v4 as uuidv4 } from 'uuid';
import { deprecated } from 'typesafe-actions';
import { generate } from 'randomstring';

export const getId = (): string => {
	const id = `${uuidv4()}`;
	return id.replaceAll('-', '');
};

export const getNodeId = (): string => {
	const id = `node_${getId()}`;
	return id;
};

export const getNodeLabel = (type: string): string => {
	const label = `${type}_${generate(2)}`;
	return label;
};

export function sleep(ms: number) {
	return new Promise((r) => setTimeout(r, ms));
}

export const { createStandardAction } = deprecated;
