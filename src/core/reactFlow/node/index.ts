import { getNodeId } from '../../../util';

export type CustomNodeParams = {
	type?: string;
	position: any;
	data: unknown;
};

export const createCustomNode = ({ type, position, data }: CustomNodeParams) => {
	return {
		id: getNodeId(),
		type: type || 'default',
		position,
		data,
	};
};
