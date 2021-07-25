import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import ProjectEditorNavMainContent from './ProjectEditorNavMainContent';
import ProjectEditorNavOptionContent from './ProjectEditorNavOptionContent';
import useGetProjectResult from '../../../../hooks/useGetProjectResult';
import CircleLoading from '../../../Loading/CircularLoading';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '40px'
  },
  container: {
    width: '100%',
    height: '100%',
  },
  contentWrapper: {
    width:'100%',
    height: '100%',
    borderBottom: '1px solid #B2B2B2',
    display: 'flex',
    backgroundColor: '#00000000',
  },
  logoWrapper: {
    width: 260,
    height: '100%',
    backgroundColor: '#F7F7F7'
  },
  logo: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navContentWrapper: {
    flexGrow: 1,
    height: '100%',
  },
  navContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  navMainContentWrapper: {
    height: '100%',
  },
  navOptionContentWrapper: {
    height: '100%',
  }
})

const ProjectEditorNav = () => {
  const classes = useStyle();
  const {error, loading} = useGetProjectResult();

  const content = (
    <div className={classes.contentWrapper}>
      <div className={classes.logoWrapper}>
        <div className={classes.logo}>
          편집
        </div>
      </div>
      <div className={classes.navContentWrapper}>
        <div className={classes.navContent}>
          <div className={classes.navMainContentWrapper}>
            <ProjectEditorNavMainContent/>
          </div>
          <div className={classes.navOptionContentWrapper}>
            <ProjectEditorNavOptionContent/>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        {(error || loading) ? <CircleLoading/> : content}
        </Container>
    </div>
  )
}

export default ProjectEditorNav;
