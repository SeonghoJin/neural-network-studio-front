import { getNodeId } from '../../../util';
import { BlockState } from '../../Project/block';

export type CustomNodeParams = {
	position?: any;
	data: BlockState;
};

export const createCustomNode = ({ position, data }: CustomNodeParams) => {
	return {
		id: getNodeId(),
		type: data.category || 'default',
		position: position || {
			x: 100,
			y: 100,
		},
		data,
	};
};
