import { Route } from 'react-router-dom';
import React from 'react';
import ReactFlow from '../Pages/test/react-flow/ReactFlowTest';

function TestRouter() {
  return (
      <Route path="/test/react-flow/:id" exact={true} component={ReactFlow}></Route>
  );
}

export default TestRouter;
