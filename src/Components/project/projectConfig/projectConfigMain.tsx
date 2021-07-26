import { Container, makeStyles } from '@material-ui/core';
import ProjectConfigSideBar from './projectConfigSideBar/ProjectConfigSideBar';
import { useState } from 'react';
import ProjectConfigViewer from './ProjectConfigViewer/ProjectConfigViewer';

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

