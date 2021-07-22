import { ProjectProps } from '../Components/project/type';
import useGetPythonCodeResult from '../hooks/useGetPythonCodeResult';
import usePutProjectContentResult from '../hooks/usePutProjectContentResult';
import useGetProjectResult from '../hooks/useGetProjectResult';
import useProjectController from '../Components/project/projectController';

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
  useProjectController(props);
  return (
    <ProjectError match={props.match}/>
  )
};

export default Project;
