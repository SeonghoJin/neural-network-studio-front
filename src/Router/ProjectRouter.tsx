import { Route } from "react-router-dom"
import ProjectEditor from "../Pages/ProjectEditor";
import { ReactFlowProvider } from 'react-flow-renderer';

const ProjectRouter = () => {
  return (
    <>
      <ReactFlowProvider>
        <Route path={'/project/list'} exact={true}></Route>
        <Route path={'/project/:projectNo'} exact={true} component={ProjectEditor}></Route>
        <Route path={'/project/:projectNo/config'} exact={true}></Route>
      </ReactFlowProvider>
    </>
  );
};

export default ProjectRouter;
