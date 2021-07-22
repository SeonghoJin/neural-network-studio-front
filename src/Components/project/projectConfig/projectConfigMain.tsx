import { Container, makeStyles } from '@material-ui/core';
import { ReactFlowProvider } from 'react-flow-renderer';
import ProjectConfigSideBar from './projectConfigSideBar/ProjectConfigSideBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProject, getProjectConfig } from '../../../module/ProjectController';
import useGetProejctConfigResult from '../../../hooks/useGetProejctConfigResult';
import useGetProjectConfigResult from '../../../hooks/useGetProejctConfigResult';
import { setProjectConfig } from '../../../module/projectConfig';

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

const ProjectConfigMain = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const {data, loading, error} = useGetProjectConfigResult();

  useEffect(() => {
    if(data != null){
      dispatch(setProjectConfig(data))
    }
  }, [data])

  useEffect(() => {
    dispatch(getProjectConfig());
  }, []);

  const content = data && (<>
      <ProjectConfigSideBar/>
      <div className={classes.contentWrapper}>
      </div>
    </>)


  return (
    <>
      <div className={classes.wrapper}>
          <Container className={classes.container}>
            <>
              {content}
            </>
          </Container>
      </div>
    </>
  );
};

export default ProjectConfigMain;

