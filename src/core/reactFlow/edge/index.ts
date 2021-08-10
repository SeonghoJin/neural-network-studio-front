import { Connection, Edge } from 'react-flow-renderer';

const createCustomEdge = (params: Edge | Connection) => {
	return {
		...params,
		animated: true,
		style: {
			stroke: 'black',
			strokeWidth: 4,
			cursor: 'pointer',
		},
		type: 'smoothstep',
	};
};

export default createCustomEdge;
