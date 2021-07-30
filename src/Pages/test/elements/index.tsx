import { Route } from 'react-router-dom';
import ColumnMoveLine from './moveline/column';

const TestElementRouter = () => (
	<div>
		<Route path="/test/elements/column-move-line" exact component={ColumnMoveLine} />
	</div>
);

export default TestElementRouter;
