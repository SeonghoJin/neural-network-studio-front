import { Route } from 'react-router-dom';
import test1 from './reacttest1';
import reacttest2 from './reacttest2';
import reacttest3 from './reacttest3';

const TestReactRouter = () => {
  return (
    <div>
      <Route path='/test/react/1' exact={true} component={test1}></Route>
      <Route path='/test/react/2' exact={true} component={reacttest2}></Route>
      <Route path='/test/react/3' exact={true} component={reacttest3}></Route>
    </div>
  );
};

export default TestReactRouter;
