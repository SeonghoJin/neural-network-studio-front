import { Route } from 'react-router-dom';
import { ReactFlowProvider } from 'react-flow-renderer';
import ProjectEditor from '../Pages/ProjectEditor';
import { ProjectConfig } from '../Pages/ProjectConfig';

const ProjectRouter = () => {
	return (
		<>
			<ReactFlowProvider>
				<Route path="/project/list" exact />
				<Route path="/project/:projectNo" exact component={ProjectEditor} />
				<Route path="/project/:projectNo/config" exact component={ProjectConfig} />
			</ReactFlowProvider>
		</>
	);
};

export default ProjectRouter;
