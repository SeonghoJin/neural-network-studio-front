import { Route } from "react-router-dom"
import ProjectEditor from "../Pages/ProjectEditor";

const ProjectRouter = () => {
  return (
    <>
      <Route path={'/project/list'} exact={true}></Route>
      <Route path={'/project/:projectNo'} exact={true} component={ProjectEditor}></Route>
    </>
  );
};

export default ProjectRouter;
