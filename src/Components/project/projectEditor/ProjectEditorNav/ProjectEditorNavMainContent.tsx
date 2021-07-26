import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core';
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

interface Props {
 onGetPythonCode : ReturnType<typeof useCallback>;
}

const ProjectEditorNavMainContent = (props: Props) => {
  const classes = useStyle();
  const { onGetPythonCode } = props;
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Button onClick={onGetPythonCode}>
          <div className={classes.mainContentItem}>PythonCode 추출</div>
        </Button>
      </div>
    </div>

  )
}

export default ProjectEditorNavMainContent;
