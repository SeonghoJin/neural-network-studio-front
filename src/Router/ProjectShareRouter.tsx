import { Route, Switch } from 'react-router-dom';
import React, { FC } from 'react';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import { DynamicPath } from '../components/PagePathConsts';
import { WebSocketContext } from '../core/Socket/Context/WebSocketContext';
import { NotFoundPage, ProjectConfigPage, ProjectSharePage } from '../Pages';

const ProjectShareRouter: FC<null> = () => {
	return (
		<PrivateAuthentication>
			<Switch>
				<PrivateAuthentication>
					<WebSocketContext>
						<Route path={DynamicPath.PROJECT_SHARE} exact component={ProjectSharePage} />
						<Route path={DynamicPath.PROJECT_SHARE_CONFIG} exact component={ProjectConfigPage} />
						<Route component={NotFoundPage} />
					</WebSocketContext>
				</PrivateAuthentication>
			</Switch>
		</PrivateAuthentication>
	);
};

export default ProjectShareRouter;
