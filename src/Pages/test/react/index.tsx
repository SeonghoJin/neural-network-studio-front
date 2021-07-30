import { Route } from 'react-router-dom';
import test1 from './reacttest1';
import reacttest2 from './reacttest2';
import reacttest3 from './reacttest3';

const TestReactRouter = () => {
	return (
		<div>
			<Route path="/test/react/1" exact component={test1} />
			<Route path="/test/react/2" exact component={reacttest2} />
			<Route path="/test/react/3" exact component={reacttest3} />
		</div>
	);
};

export default TestReactRouter;
