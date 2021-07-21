import { Route } from "react-router-dom"
import ProjectEditorLearn from "../Components/projectEditor/projectEditorLearn";
import ProjectEditorSave from "../Components/projectEditor/ProjectEditorSave";
import ProjectEditor from "../Pages/ProjectEditor";
import { ReactFlowProvider } from 'react-flow-renderer';

const ProjectRouter = () => {
  return (
    <>
      <ReactFlowProvider>
        <Route path={'/project/list'} exact={true}></Route>
        <Route path={'/project/:projectNo'} exact={true} component={ProjectEditor}></Route>
        <Route path={'/project/:projectNo/save'} exact={true} component={ProjectEditorSave}></Route>
        <Route path={'/project/:projectNo/learn'} exact={true} component={ProjectEditorLearn}></Route>
      </ReactFlowProvider>
    </>
  );
};

export default ProjectRouter;
