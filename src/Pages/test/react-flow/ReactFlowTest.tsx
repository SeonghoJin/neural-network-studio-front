import { Route } from 'react-router-dom';
import React from 'react';
import test1 from './test1';
import test2 from './test2';
import test3 from './test3';
import test4 from './test4';
import test5 from './test5';
import test6 from './test6';
import test7 from './test7';
import test8 from './test8';
import test9 from './test9';
import test10 from './test10';

const ReactFlowTest = () => (
    <div>
        <Route path="/test/react-flow/1" exact={true} component={test1}></Route>
        <Route path="/test/react-flow/2" exact={true} component={test2}></Route>
        <Route path="/test/react-flow/3" exact={true} component={test3}></Route>
        <Route path="/test/react-flow/4" exact={true} component={test4}></Route>
        <Route path="/test/react-flow/5" exact={true} component={test5}></Route>
        <Route path="/test/react-flow/6" exact={true} component={test6}></Route>
        <Route path="/test/react-flow/7" exact={true} component={test7}></Route>
        <Route path="/test/react-flow/8" exact={true} component={test8}></Route>
        <Route path="/test/react-flow/9" exact={true} component={test9}></Route>
        <Route path="/test/react-flow/10" exact={true} component={test10}></Route>
    </div>
);

export default ReactFlowTest;