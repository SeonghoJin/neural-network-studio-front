import { Route } from 'react-router-dom';
import ColumnMoveLine from './moveline/column';

const TestElementRouter = () => (
  <div>
    <Route path={'/test/elements/column-move-line'} exact={true} component={ColumnMoveLine}></Route>
  </div>
);

export default TestElementRouter;
