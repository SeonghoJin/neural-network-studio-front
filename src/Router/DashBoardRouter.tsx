import { Route, Switch } from 'react-router-dom';
import React from 'react';
import PrivateAuthentication from '../Authentication/PrivateAuthentication';
import { Dashboard, NewProject } from '../routes';
import Navigation from '../components/nav';
import NotFound from '../Pages/NotFound';

const DashBoardRouter = () => {
	return (
		<PrivateAuthentication>
			<Navigation />
			<Switch>
				<Route path="/dashboard/projects" exact component={Dashboard} />
				<Route path="/dashboard/projects/new" exact component={NewProject} />
				<Route component={NotFound} />
			</Switch>
		</PrivateAuthentication>
	);
};

export default DashBoardRouter;
