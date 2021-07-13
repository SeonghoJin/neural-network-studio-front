import { Route } from 'react-router-dom';
import React from 'react';
import ReactFlow from '../Pages/test/react-flow/ReactFlowTest';
import TestPageRouter from '../Pages/test/page';
import TestElementRouter from '../Pages/test/elements';

function TestRouter() {
  return (
    <>
      <Route path="/test/react-flow/:id" exact={true} component={ReactFlow}></Route>
      <Route path="/test/page/:pagename" exact={true} component={TestPageRouter}></Route>
      <Route path={'/test/elements/:elementname'} exact={true} component={TestElementRouter}></Route>
    </>
  );
}

export default TestRouter;
