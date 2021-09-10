import { Route, Switch } from 'react-router-dom';
import React, { FC, useEffect } from 'react';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import { DynamicPath } from '../components/PagePathConsts';
import { WebSocketContext } from '../core/Socket/Context/WebSocketContext';
import { NotFoundPage, ProjectSharePage } from '../Pages';
import { ProjectShareConfigPage } from '../Pages/ProjectShareConfigPage';
import { SocketProvider } from '../core/Socket/Context/SocketContext';

const ProjectShareRouter: FC<null> = () => {
	return (
		<PrivateAuthentication>
			<SocketProvider>
				<WebSocketContext>
					<Switch>
						<Route path={DynamicPath.PROJECT_SHARE} exact component={ProjectSharePage} />
						<Route path={DynamicPath.PROJECT_SHARE_CONFIG} exact component={ProjectShareConfigPage} />
						<Route component={NotFoundPage} />
					</Switch>
				</WebSocketContext>
			</SocketProvider>
		</PrivateAuthentication>
	);
};

export default ProjectShareRouter;
