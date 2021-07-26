import React, { useCallback } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import { getProjectConfigThunk, getProjectThunk, putProjectConfigThunk, putProjectInfoThunk } from '../../../../module/API/project/thunks';
import { RootDispatch } from '../../../../module';
import useProjectInfo from '../../../../hooks/useProjectInfo';
import { useLocation } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

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

interface Props {
  onSave : ReturnType<typeof useCallback>
}

const ProjectConfigNavOptionContent = (props : Props) => {
  const {onSave} = props;
  const classes = useStyle();


  return (<div className={classes.wrapper}>
    <div className={classes.container}>
      <div className={classes.mainOptionContentItem}>
        <Button onClick={onSave}>
          <SaveIcon/>
        </Button>
      </div>
    </div>
  </div>)
}

export default ProjectConfigNavOptionContent;
