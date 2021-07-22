import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import SettingsIcon from '@material-ui/icons/Settings';
import { useDispatch } from 'react-redux';
import { putProjectContent } from '../../../module/ProjectController';
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
  const classes = useStyle();
  const dispatch = useDispatch();

  const onSave = useCallback(() => {
    dispatch(putProjectContent());
  }, []);

  return (<div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.mainOptionContentItem}>
        <button>
          <SettingsIcon/>
        </button>
      </div>
      <div className={classes.mainOptionContentItem}>
        <div>
            <button onClick={() => {onSave()}}>
            <SaveIcon/>
          </button>
        </div>
      </div>
    </div>
  </div>)
}

export default ProjectNavMainContent;
