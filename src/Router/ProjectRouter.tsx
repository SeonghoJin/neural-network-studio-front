import { Route } from "react-router-dom"
import { ReactFlowProvider } from 'react-flow-renderer';
import ProjectEditor from '../Pages/ProjectEditor';
import { ProjectConfig } from '../Pages/ProjectConfig';

const ProjectRouter = () => {
  return (
    <>
      <ReactFlowProvider>
        <Route path={'/project/list'} exact={true}></Route>
        <Route path={'/project/:projectNo'} exact={true} component={ProjectEditor}></Route>
        <Route path={'/project/:projectNo/config'} exact={true} component={ProjectConfig}></Route>
      </ReactFlowProvider>
    </>
  );
};

export default ProjectRouter;
