import { ProjectProps } from '../Components/project/type';
import useGetPythonCodeResult from '../hooks/useGetPythonCodeResult';
import usePutProjectContentResult from '../hooks/usePutProjectContentResult';
import useGetProjectResult from '../hooks/useGetProjectResult';
import useProjectController from '../Components/project/projectController';
import { useEffect } from 'react';
import { getProject } from '../module/ProjectController';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import ProjectEditor from './ProjectEditor';
import { ProjectConfig } from './ProjectConfig';
import { setReactFlowInstance } from '../module/ReactFlowInstance';

const ProjectError = (props: ProjectProps) => {
  const getPythonCodeResult = useGetPythonCodeResult(props);
  const putProjectContentResult = usePutProjectContentResult();
  const getProjectResult = useGetProjectResult()
  return (
    <>
      {getProjectResult.error && (getProjectResult.errorModal)}
      {getPythonCodeResult.error && (getPythonCodeResult.errorModal)}
      {putProjectContentResult.error && (putProjectContentResult.errorModal)}
    </>
  )
}

const Project = (props : ProjectProps) => {
  const dispatch = useDispatch();
  const getProjectResult = useGetProjectResult();

  useEffect(() => {
    dispatch(getProject());
  }, []);

  useProjectController(props);

  const content = getProjectResult.data && (
    <>
      <Route path={'/project/:projectNo'} exact={true} component={ProjectEditor}></Route>
      <Route path={'/project/:projectNo/config'} exact={true} component={ProjectConfig}></Route>
    </>
  )
  return (
    <>
      <ProjectError match={props.match}/>
      {content}
    </>
  )
};

export default Project;
