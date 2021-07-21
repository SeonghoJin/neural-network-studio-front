import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import SaveIcon from '@material-ui/icons/Save';
import SettingsIcon from '@material-ui/icons/Settings';
const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainOptionContentItem: {
    marginLeft: '10px',
    marginRight: '10px',
  }
})

const ProjectNavMainContent = () => {
  const location = useLocation();
  const projectNo = location.pathname.split('/')[2];
  const classes = useStyle();
  return (<div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.mainOptionContentItem}>
        <Link to={`/project/${projectNo}/config`}>
          <SettingsIcon/>
        </Link>
      </div>
      <div className={classes.mainOptionContentItem}>
        <Link to={`/project/${projectNo}/save`}>
          <SaveIcon/>
        </Link>
      </div>
    </div>
  </div>)
}

export default ProjectNavMainContent;
