import { Route } from 'react-router-dom';
import React from 'react';
import test1 from './test1';
import test2 from './test2';
import test3 from './test3';
import test4 from './test4';

const ReactFlowTest = () => (
    <div>
        <Route path="/test/react-flow/1" exact={true} component={test1}></Route>
        <Route path="/test/react-flow/2" exact={true} component={test2}></Route>
        <Route path="/test/react-flow/3" exact={true} component={test3}></Route>
        <Route path="/test/react-flow/4" exact={true} component={test4}></Route>
    </div>
);

export default ReactFlowTest;
