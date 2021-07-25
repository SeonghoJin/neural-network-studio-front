import { makeStyles } from '@material-ui/core';
import useGetPythonCodeResult from '../hooks/useGetPythonCodeResult';
import usePutProjectContentResult from '../hooks/usePutProjectContentResult';
import useGetProjectResult from '../hooks/useGetProjectResult';
import ProjectEditorMain from '../Components/project/projectEditor/projectEditorMain';
import ProjectNav from '../Components/project/ProjectNav/projectNav';
import { ProjectProps } from '../Components/project/type';
import ProjectEditorNav from '../Components/project/projectEditor/ProjectEditorNav/projectEditorNav';
import { useEffect } from 'react';
import { getProject } from '../module/ProjectController';
import { useDispatch } from 'react-redux';

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

const ProjectEditor = (props : ProjectProps) => {

  const dispatch = useDispatch();
  const classes = useStyle();

  useEffect(() => {
    dispatch(getProject());
  }, []);

  return (
    <>
      <ProjectError match={props.match}/>
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
