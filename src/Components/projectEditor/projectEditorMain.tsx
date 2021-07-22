import { Container, makeStyles } from '@material-ui/core';
import ProjectEditorLeftSideBar from './projectEditorSideBar/ProjectEditorLeftSideBar';
import ProjectEditorGraphContainer from './ProjectEditorGraphContainer';
import { ReactFlowProvider } from 'react-flow-renderer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProject } from '../../module/ProjectController';
import useProjectController from './projectController';
import { RootState } from '../../module';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  container: {
    height: '100%',
    display: 'flex',
  },
  contentWrapper: {
    flexGrow: 1,
  }
})

const ProjectEditorMain = () => {
  const classes = useStyle();

  const dispatch = useDispatch();
  const action = useProjectController();
  const result = useSelector((state: RootState) => state.projectApi.putProjectContentResult);

  useEffect(() => {
    dispatch(getProject());
  }, []);

  useEffect(() => {
    if(result.result?.check === true){
      dispatch(getProject());
    }
  }, [result.result?.check]);
  return (
    <div className={classes.wrapper}>
      <ReactFlowProvider>
        <Container className={classes.container}>
          <ProjectEditorLeftSideBar/>
          <div className={classes.contentWrapper}>
            <ProjectEditorGraphContainer/>
          </div>
        </Container>
      </ReactFlowProvider>
    </div>
  );
}

export default ProjectEditorMain;
