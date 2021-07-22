import { Route } from "react-router-dom"
import ProjectEditorLearn from "../Components/projectEditor/projectEditorLearn";
import ProjectEditor from "../Pages/ProjectEditor";
import { ReactFlowProvider } from 'react-flow-renderer';

const ProjectRouter = () => {
  return (
    <>
      <ReactFlowProvider>
        <Route path={'/project/list'} exact={true}></Route>
        <Route path={'/project/:projectNo'} exact={true} component={ProjectEditor}></Route>
      </ReactFlowProvider>
    </>
  );
};

export default ProjectRouter;
