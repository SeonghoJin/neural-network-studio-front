import { Route } from 'react-router-dom';
import PrivateAuthentication from '../Authentication/PrivateAuthentication';
import { Dashboard, NewProject } from '../routes';
import Navigation from '../components/nav';

const DashBoardRouter = () => {
	return (
		<PrivateAuthentication>
			<Navigation />
			<Route path="/dashboard/projects" exact component={Dashboard} />
			<Route path="/dashboard/projects/new" exact component={NewProject} />
		</PrivateAuthentication>
	);
};

export default DashBoardRouter;
