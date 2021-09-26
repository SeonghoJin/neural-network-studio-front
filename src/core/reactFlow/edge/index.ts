import { Connection, Edge } from 'react-flow-nns';

const createCustomEdge = (params: Edge | Connection) => {
	return {
		...params,
		animated: true,
		style: {
			stroke: 'black',
			strokeWidth: 4,
			cursor: 'pointer',
		},
	};
};

export default createCustomEdge;
