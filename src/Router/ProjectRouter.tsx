import { Route } from 'react-router-dom';
import { ReactFlowProvider } from 'react-flow-renderer';
import { FC } from 'react';
import ProjectEditor from '../Pages/ProjectEditor';
import ProjectConfig from '../Pages/ProjectConfig';
import PrivateAuthentication from '../Authentication/PrivateAuthentication';

const ProjectRouter: FC<null> = () => {
	return (
		<PrivateAuthentication>
			<ReactFlowProvider>
				<Route path="/project/:projectNo" exact component={ProjectEditor} />
				<Route path="/project/:projectNo/config" exact component={ProjectConfig} />
			</ReactFlowProvider>
		</PrivateAuthentication>
	);
};

export default ProjectRouter;
