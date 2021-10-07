import { Route, Switch } from 'react-router-dom';
import React, { FC } from 'react';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import { DynamicPath, StaticPath } from '../components/PagePathConsts';
import { NotFoundPage, ProjectConfigPage, ProjectEditorPage } from '../Pages';
import { ProjectDatasetPage } from '../Pages/ProjectDatasetPage';

const ProjectRouter: FC<null> = () => {
	return (
		<PrivateAuthentication>
			<Switch>
				<Route path={DynamicPath.PROJECT} exact component={ProjectEditorPage} />
				<Route path={DynamicPath.PROJECT_CONFIG} exact component={ProjectConfigPage} />
				<Route path={DynamicPath.PROJECT_DATASET_PAGE} exact component={ProjectDatasetPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</PrivateAuthentication>
	);
};

export default ProjectRouter;
