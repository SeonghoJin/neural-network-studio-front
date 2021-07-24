import { Container, makeStyles } from '@material-ui/core';
import { ReactFlowProvider } from 'react-flow-renderer';
import ProjectConfigSideBar from './projectConfigSideBar/ProjectConfigSideBar';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProject, getProjectConfig } from '../../../module/ProjectController';
import useGetProejctConfigResult from '../../../hooks/useGetProjectConfigResult';
import useGetProjectConfigResult from '../../../hooks/useGetProjectConfigResult';
import { setProjectConfig } from '../../../module/projectConfig';
import ProjectConfigViewer from './ProjectConfigViewer/ProjectConfigViewer';
import useGetProjectResult from '../../../hooks/useGetProjectResult';
import projectInfo, { setProjectInfo } from '../../../module/projectInfo';

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
  const projectConfigResult = useGetProjectConfigResult();
  const projectInfoResult = useGetProjectResult();

  useEffect(() => {
    if(projectConfigResult.data != null){
      dispatch(setProjectConfig(projectConfigResult.data))
    }
  }, [projectConfigResult.data]);

  useEffect(() => {
    if(projectInfoResult.data != null){
      dispatch(setProjectInfo({
        name: projectInfoResult.data.name,
        description: projectInfoResult.data.description,
      }))
    }
  }, [projectInfoResult.data]);


  useEffect(() => {
    dispatch(getProjectConfig());
    setTimeout(() => {
      dispatch(getProject());
    }, 1)
  }, []);

  const [value, setValue] = useState(0);

  return (
    <>
      <div className={classes.wrapper}>
          <Container className={classes.container}>
            <ProjectConfigSideBar
              value={value}
              setValue={setValue}
            />
              <div className={classes.contentWrapper}>
                <ProjectConfigViewer index={value}/>
              </div>
          </Container>
      </div>
    </>
  );
};

export default ProjectConfigMain;

