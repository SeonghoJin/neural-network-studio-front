import { makeStyles } from '@material-ui/core';
import useGetPythonCodeResult from '../hooks/useGetPythonCodeResult';
import usePutProjectContentResult from '../hooks/usePutProjectContentResult';
import useGetProjectResult from '../hooks/useGetProjectResult';
import ProjectEditorMain from '../components/project/projectEditor/projectEditorMain';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import ProjectEditorNav from '../components/project/projectEditor/ProjectEditorNav/projectEditorNav';

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
});

const ProjectError = () => {
  const getPythonCodeResult = useGetPythonCodeResult();
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

const ProjectEditor = () => {

  const classes = useStyle();

  return (
    <>
      <ProjectError/>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <ProjectNav/>
          <ProjectEditorNav/>
          <div className={classes.content}>
            <ProjectEditorMain/>
          </div>
        </div>
      </div>
    </>
  );
}


export default ProjectEditor;
