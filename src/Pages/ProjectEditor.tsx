import { LocationProps, MatchProps } from '../core/types';
import { makeStyles } from '@material-ui/core';
import useGetPythonCodeResult from '../hooks/useGetPythonCodeResult';
import usePutProjectContentResult from '../hooks/usePutProjectContentResult';
import useGetProjectResult from '../hooks/useGetProjectResult';
import useProjectEditorController from '../Components/project/projectEditor/projectEditorController';
import ProjectEditorMain from '../Components/project/projectEditor/projectEditorMain';
import ProjectNav from '../Components/project/ProjectNav/projectNav';
import { ProjectProps } from '../Components/project/type';

const useStyle = makeStyles({
  wrapper: {
    width: '100vw',
    height: '100vh',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
  }
})

const useProjectEditorError = (props: ProjectProps) => {

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

const ProjectEditor = (props : ProjectProps) => {

  const classes = useStyle();
  const errorModal = useProjectEditorError(props);
  useProjectEditorController(props);

  return (
    <>
      {errorModal}
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <ProjectNav/>
          <div className={classes.content}>
            <ProjectEditorMain/>
          </div>
        </div>
      </div>
    </>
  );
}


export default ProjectEditor;
