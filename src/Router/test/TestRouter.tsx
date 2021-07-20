import { Route } from 'react-router-dom';
import React from 'react';
import ReactFlow from 'react-flow-renderer';
import TestPageRouter from '../../Pages/test/page';
import TestElementRouter from '../../Pages/test/elements';
import TestReactRouter from '../../Pages/test/react';

function TestRouter() {
  return (
    <>
      <Route path="/test/react-flow/:id" exact={true} component={ReactFlow}></Route>
      <Route path="/test/page/:pagename" exact={true} component={TestPageRouter}></Route>
      <Route path='/test/elements/:elementname' exact={true} component={TestElementRouter}></Route>
      <Route path='/test/react/:id' exact={true} component={TestReactRouter}></Route>
    </>
  );
}

export default TestRouter;
