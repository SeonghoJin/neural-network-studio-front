import { Route } from 'react-router-dom';
import React from 'react';
import test1 from './test1';
import test2 from './test2';

const ReactFlowTest = () => (
    <div>
        <Route path="/test/react-flow/1" exact={true} component={test1}></Route>
        <Route path="/test/react-flow/2" exact={true} component={test2}></Route>
    </div>
);

export default ReactFlowTest;
