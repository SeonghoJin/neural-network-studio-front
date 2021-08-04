import React from 'react';
import { ConnectionLineComponentProps, getSmoothStepPath } from 'react-flow-renderer';

const ConnectionLine = ({
	sourceX,
	sourceY,
	sourcePosition,
	targetX,
	targetY,
	targetPosition,
	connectionLineType,
	connectionLineStyle,
}: ConnectionLineComponentProps) => {
	const smoothStep = getSmoothStepPath({
		sourceX,
		sourceY,
		targetX,
		targetY,
		targetPosition,
		sourcePosition,
	});

	return (
		<g>
			<path fill="none" stroke="#636f7d" strokeWidth={1.5} className="animated" d={smoothStep} />
			<circle cx={targetX} cy={targetY} fill="#fff" r={2} stroke="#636f7d" strokeWidth={3} />
		</g>
	);
};

export default ConnectionLine;
