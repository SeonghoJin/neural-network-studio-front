import { Route, Switch } from 'react-router-dom';
import React from 'react';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import { CreateProjectPage, DashBoardPage, NotFoundPage } from '../Pages';
import { ModifyProjectPage } from '../Pages/ModifyProjectPage';
import { DynamicPath, StaticPath } from '../components/PagePathConsts';

const DashBoardRouter = () => {
	return (
		<PrivateAuthentication>
			<Switch>
				<Route path={StaticPath.DASHBOARD_PROJECTS} exact component={DashBoardPage} />
				<Route path={StaticPath.DASHBOARD_NEW_PROJECT} exact component={CreateProjectPage} />
				<Route path={DynamicPath.DASHBOARD_PROJECT_MODIFY} exact component={ModifyProjectPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</PrivateAuthentication>
	);
};

export default DashBoardRouter;
