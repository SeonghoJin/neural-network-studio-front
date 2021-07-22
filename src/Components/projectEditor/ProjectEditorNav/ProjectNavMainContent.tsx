import React, { useCallback, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
import fileDownload from 'js-file-download'
import { getPythonCode } from '../../../module/ProjectController';
import { RootState } from '../../../module';
import useGetPythonCodeResult from '../hooks/useGetPythonCodeResult';

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

const ProjectNavMainContent = () => {
  const location = useLocation();
  const projectNo = location.pathname.split('/')[2];
  const classes = useStyle();
  const dispatch = useDispatch();

  const onGetPythonCode = useCallback(() => {
    dispatch(getPythonCode());
  }, []);

  return (<div className={classes.wrapper}>
    <div className={classes.container}>
      <Link to={`/project/${projectNo}`}>
        <div className={classes.mainContentItem}>편집</div>
      </Link>
      <Link to={`/project/${projectNo}/learn`}>
        <div className={classes.mainContentItem}>학습</div>
      </Link>
      <Button onClick={onGetPythonCode}>
        <div className={classes.mainContentItem}>PythonCode추출</div>
      </Button>
    </div>
  </div>)
}

export default ProjectNavMainContent;
