import { Route } from 'react-router-dom';
import React from 'react';
import ReactFlow from './react-flow/ReactFlowTest';

function TestRouter() {
  return (
      <Route path="test/react-flow/:id" component={ReactFlow}></Route>
  );
}

export default TestRouter;
