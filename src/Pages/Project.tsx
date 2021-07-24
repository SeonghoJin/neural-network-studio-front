import { ProjectProps } from '../Components/project/type';
import useProjectController from '../Components/project/projectController';
import { Route } from 'react-router-dom';
import ProjectEditor from './ProjectEditor';
import { ProjectConfig } from './ProjectConfig';


const Project = (props : ProjectProps) => {

  const projectController = useProjectController(props);

  return (
    <>
      <Route path={'/project/:projectNo'} exact={true} component={ProjectEditor}></Route>
      <Route path={'/project/:projectNo/config'} exact={true} component={ProjectConfig}></Route>
    </>
  )
};

export default Project;
