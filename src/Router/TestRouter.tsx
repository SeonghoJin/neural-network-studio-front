import { Route } from 'react-router-dom';
import React from 'react';
import ReactFlow from 'react-flow-renderer';
import TestElementRouter from '../Pages/test/elements';
import TestReactRouter from '../Pages/test/react';
import ReactFlowTest from '../Pages/test/react-flow/ReactFlowTest';

function TestRouter() {
	return (
		<>
			<Route path="/test/react-flow/:id" exact component={ReactFlowTest} />
			<Route path="/test/elements/:elementname" exact component={TestElementRouter} />
			<Route path="/test/react/:id" exact component={TestReactRouter} />
		</>
	);
}

export default TestRouter;
