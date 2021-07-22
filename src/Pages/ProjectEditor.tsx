import { LocationProps, MatchProps } from '../core/types';
import ProjectEditorNav from '../Components/projectEditor/ProjectEditorNav/projectEditorNav';
import { makeStyles } from '@material-ui/core';
import ProjectEditorMain from '../Components/projectEditor/projectEditorMain';
import useProjectController from '../Components/projectEditor/projectController';
import useGetPythonCodeResult from '../hooks/useGetPythonCodeResult';
import usePutProjectContentResult from '../hooks/usePutProjectContentResult';
import useGetProjectResult from '../hooks/useGetProjectResult';

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

type MatchParams = {
  projectNo: string;
}

export type ProjectEditorProps = MatchProps<MatchParams>;

const useProjectEditorError = (props: ProjectEditorProps) => {

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

const ProjectEditor = (props : ProjectEditorProps & LocationProps) => {

  const classes = useStyle();
  const errorModal = useProjectEditorError(props);
  useProjectController(props);

  return (
    <>
      {errorModal}
      <div className={classes.wrapper}>
        <div className={classes.container}>
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
