import { Route, Switch } from 'react-router-dom';
import React, { FC } from 'react';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import { DynamicPath, StaticPath } from '../components/PagePathConsts';
import { NotFoundPage, ProjectConfigPage, ProjectEditorPage } from '../Pages';
import { ProjectDatasetPage } from '../Pages/ProjectDatasetPage';
import { ProjectTrainPage } from '../Pages/ProjectTrainPage';
import ErrorBoundary from '../components/utils/ErrorBoundary';

const ProjectRouter: FC<null> = () => {
	return (
		<PrivateAuthentication>
			<Switch>
				<Route path={DynamicPath.PROJECT} exact component={ProjectEditorPage} />
				<Route path={DynamicPath.PROJECT_CONFIG} exact component={ProjectConfigPage} />
				<Route path={DynamicPath.PROJECT_DATASET_PAGE} exact component={ProjectDatasetPage} />
				<Route path={DynamicPath.PROJECT_TRAIN} exact component={ProjectTrainPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</PrivateAuthentication>
	);
};

export default ProjectRouter;
