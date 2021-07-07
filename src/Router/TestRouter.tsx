import { Route } from 'react-router-dom';
import React from 'react';
import ReactFlow from '../Pages/test/react-flow/ReactFlowTest';
import TestPageRouter from '../Pages/test/page';

function TestRouter() {
  return (
    <>
      <Route path="/test/react-flow/:id" exact={true} component={ReactFlow}></Route>
      <Route path="/test/page/:pagename" exact={true} component={TestPageRouter}></Route>
    </>
  );
}

export default TestRouter;
