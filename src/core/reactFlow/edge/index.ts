import { Connection, Edge } from 'react-flow-renderer';

const createCustomEdge = (params: Edge | Connection) => {
	return {
		...params,
		animated: true,
		style: {
			strokeWidth: 4,
			cursor: 'pointer',
		},
		type: 'smoothstep',
	};
};

export default createCustomEdge;
