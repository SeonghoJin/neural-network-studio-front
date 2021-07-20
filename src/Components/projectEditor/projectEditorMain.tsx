import { Container, makeStyles } from '@material-ui/core';
import ProjectEditorLeftSideBar from './projectEditorSideBar/ProjectEditorLeftSideBar';
import ProjectEditorGraphContainer from './ProjectEditorGraphContainer';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  container: {
    height: '100%',
    display: 'flex',
  },
  graphWrapper: {
    flexGrow: 1,
  }
})

const ProjectEditorMain = () => {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <ProjectEditorLeftSideBar/>
        <div className={classes.graphWrapper}>
          <ProjectEditorGraphContainer/>
        </div>
      </Container>
    </div>
  );
}

export default ProjectEditorMain;
