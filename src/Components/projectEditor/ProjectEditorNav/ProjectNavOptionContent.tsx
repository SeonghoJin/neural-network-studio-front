import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import SettingsIcon from '@material-ui/icons/Settings';
import { useDispatch } from 'react-redux';
import { putProjectContent } from '../../../module/ProjectController';
import Button from 'react-bootstrap/esm/Button';
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
  const dispatch = useDispatch();

  const onSave = useCallback(() => {
    dispatch(putProjectContent());
  }, []);


  return (<div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.mainOptionContentItem}>
        <Button>
          <SettingsIcon/>
        </Button>
      </div>
      <div className={classes.mainOptionContentItem}>
          <Button onClick={() => {onSave()}}>
            <SaveIcon/>
        </Button>
      </div>
    </div>
  </div>)
}

export default ProjectNavOptionContent;
