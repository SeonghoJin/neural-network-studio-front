import { Container, makeStyles } from '@material-ui/core';
import ProjectEditorGraph from './projectEditorGraph';
import ProjectEditorLeftSideBar from './projectEditorSideBar/ProjectEditorLeftSideBar';
import { useRef, useState } from 'react';
import {
  OnLoadParams,
  ReactFlowProvider,
  useStoreState,
  useZoomPanHelper
} from 'react-flow-renderer';
import {
  useElementDispatch,
  useElementState
} from '../../core/Context/ElementProvider/ElementProvider';
import { useProjectConfigState } from '../../core/Context/ProjectConfigProvider';
import ElementsStorage from '../../Storage/ElementsStorage';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  container: {
    height: '100%',
    display: 'flex',
  },
  graphWrapper: {
    flexGrow: 1,
  }
})

const ProjectEditorMain = () => {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <ProjectEditorLeftSideBar/>
        <div className={classes.graphWrapper}>
          <ReactFlowProvider>
            <ProjectEditorGraph/>
          </ReactFlowProvider>
        </div>
      </Container>
    </div>
  );
}

export default ProjectEditorMain;
