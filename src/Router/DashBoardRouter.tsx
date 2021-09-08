import { Route, Switch } from 'react-router-dom';
import React from 'react';
import PrivateAuthentication from '../Authentication/PrivateAuthentication';
import Navigation from '../components/nav';
import { CreateProjectPage, DashBoardPage, NotFoundPage } from '../Pages';

const DashBoardRouter = () => {
	return (
		<PrivateAuthentication>
			<Navigation />
			<Switch>
				<Route path="/dashboard/projects" exact component={DashBoardPage} />
				<Route path="/dashboard/projects/new" exact component={CreateProjectPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</PrivateAuthentication>
	);
};

export default DashBoardRouter;
