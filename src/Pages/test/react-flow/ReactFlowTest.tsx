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
import CustomEdgeTest from './CustomEdgeTest';
import ValidationTest from './ValiddationTest';

const ReactFlowTest = () => (
	<div>
		<Route path="/test/react-flow/1" exact component={test1} />
		<Route path="/test/react-flow/2" exact component={test2} />
		<Route path="/test/react-flow/3" exact component={test3} />
		<Route path="/test/react-flow/4" exact component={test4} />
		<Route path="/test/react-flow/5" exact component={test5} />
		<Route path="/test/react-flow/6" exact component={test6} />
		<Route path="/test/react-flow/7" exact component={test7} />
		<Route path="/test/react-flow/8" exact component={test8} />
		<Route path="/test/react-flow/9" exact component={test9} />
		<Route path="/test/react-flow/10" exact component={test10} />
		<Route path="/test/react-flow/custom-edge" exact component={CustomEdgeTest} />
		<Route path="/test/react-flow/validation" exact component={ValidationTest} />
	</div>
);

export default ReactFlowTest;
