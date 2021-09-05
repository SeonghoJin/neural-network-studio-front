import { Route, Switch } from 'react-router-dom';
import React, { FC } from 'react';
import ProjectEditor from '../Pages/ProjectEditor';
import ProjectConfig from '../Pages/ProjectConfig';
import PrivateAuthentication from '../Authentication/PrivateAuthentication';
import { DynamicPath } from '../pagePathName';
import NotFound from '../Pages/NotFound';
import ProjectShare from '../components/project/ProjectShare';
import { WebSocketContext } from '../core/Socket/Context/WebSocketContext';

const ProjectShareRouter: FC<null> = () => {
	return (
		<PrivateAuthentication>
			<Switch>
				<PrivateAuthentication>
					<WebSocketContext>
						<Route path={DynamicPath.PROJECT_SHARE} exact component={ProjectShare} />
						<Route path={DynamicPath.PROJECT_SHARE_CONFIG} exact component={ProjectConfig} />
						<Route component={NotFound} />
					</WebSocketContext>
				</PrivateAuthentication>
			</Switch>
		</PrivateAuthentication>
	);
};

export default ProjectShareRouter;
