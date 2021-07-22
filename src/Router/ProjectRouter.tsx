import { Route } from "react-router-dom"
import ProjectEditor from "../Pages/ProjectEditor";
import { ReactFlowProvider } from 'react-flow-renderer';
import { ProjectConfig } from '../Pages/ProjectConfig';
import Project from "../Pages/Project";

const ProjectRouter = () => {
  return (
    <>
      <ReactFlowProvider>
        <Route path={'/project/list'} exact={true}></Route>
        <Route path={'/project/:projectNo'} component={Project}></Route>
      </ReactFlowProvider>
    </>
  );
};

export default ProjectRouter;
