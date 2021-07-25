import React, { useCallback } from 'react';
import { getPythonCode } from '../../../../module/ProjectController';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
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
  mainContentItem: {
    marginLeft: '10px',
    marginRight: '10px',
  }
})

const ProjectEditorNavMainContent = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const onGetPythonCode = useCallback(() => {
    dispatch(getPythonCode());
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Button onClick={onGetPythonCode}>
          <div className={classes.mainContentItem} >PythonCode 추출</div>
        </Button>
      </div>
    </div>

  )
}

export default ProjectEditorNavMainContent;
