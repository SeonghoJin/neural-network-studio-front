import { Link, useLocation } from 'react-router-dom';
import React, { useCallback } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import { putProjectContent } from '../../../../module/ProjectController';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
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

const ProjectEditorNavOptionContent = () => {
  const classes = useStyle();
  const location = useLocation();
  const dispatch = useDispatch()
  const onSave = useCallback(() => {
    dispatch(putProjectContent());
  }, []);

  return (<div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.mainOptionContentItem}>
        <Button onClick={() => {onSave()}}>
          <SaveIcon/>
        </Button>
      </div>
      <div className={classes.mainOptionContentItem}>
        <Link to={location.pathname+'/config'}>
          <SettingsIcon/>
        </Link>
      </div>
    </div>
  </div>)
}

export default ProjectEditorNavOptionContent;
