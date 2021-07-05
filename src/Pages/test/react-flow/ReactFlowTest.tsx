import { Route } from 'react-router-dom';
import React from 'react';
import test1 from './test1';

function ReactFlowTest() {
  return (
        <Route path="/test/react-flow/1" exact={true} component={test1}></Route>
  );
}

export default ReactFlowTest;
