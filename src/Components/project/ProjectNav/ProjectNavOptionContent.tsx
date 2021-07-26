import React from 'react';
import { makeStyles } from '@material-ui/core';
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

const ProjectNavOptionContent = () => {
  const classes = useStyle();

  return (<div className={classes.wrapper}>
    <div className={classes.container}>
    </div>
  </div>)
}

export default ProjectNavOptionContent;
