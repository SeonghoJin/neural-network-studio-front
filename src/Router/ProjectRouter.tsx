import { Route } from "react-router-dom"
import { ReactFlowProvider } from 'react-flow-renderer';
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
