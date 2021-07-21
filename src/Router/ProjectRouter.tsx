import { Route } from "react-router-dom"
import ProjectEditorSave from "../Components/projectEditor/ProjectEditorSave";
import ProjectEditor from "../Pages/ProjectEditor";

const ProjectRouter = () => {
  return (
    <>
      <Route path={'/project/list'} exact={true}></Route>
      <Route path={'/project/:projectNo'} exact={true} component={ProjectEditor}></Route>
      <Route path={'/project/:projectNo/save'} exact={true} component={ProjectEditorSave}></Route>
    </>
  );
};

export default ProjectRouter;
