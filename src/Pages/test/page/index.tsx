import { Route } from 'react-router-dom';
import Editor from './Editor';

const TestPageRouter = () => (
    <div>
      <Route path={'/test/page/editor'} exact={true} component={Editor}></Route>
    </div>
);

export default TestPageRouter;
