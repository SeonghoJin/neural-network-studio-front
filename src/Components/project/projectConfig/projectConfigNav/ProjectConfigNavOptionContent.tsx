import { Link, useLocation } from 'react-router-dom';
import React, { useCallback } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import { putProjectConfigAndInfo, putProjectContent } from '../../../../module/ProjectController';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import SettingsIcon from '@material-ui/icons/Settings';
import useProjectConfig from '../../../../hooks/useProjectConfig';

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

const ProjectConfigNavOptionContent = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [projectConfig, setProjectConfig] = useProjectConfig();

  const onSave = useCallback(() => {
    dispatch(putProjectConfigAndInfo());
  }, [projectConfig]);

  return (<div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.mainOptionContentItem}>
        <Button onClick={() => {onSave()}}>
          <SaveIcon/>
        </Button>
      </div>
    </div>
  </div>)
}

export default ProjectConfigNavOptionContent;
