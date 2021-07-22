import { LocationProps, MatchProps } from '../core/types';
import ProjectEditorNav from '../Components/projectEditor/ProjectEditorNav/projectEditorNav';
import { makeStyles, Modal } from '@material-ui/core';
import ProjectEditorMain from '../Components/projectEditor/projectEditorMain';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../module';
import { useEffect } from 'react';
import useProjectController from '../Components/projectEditor/projectController';
import { getProject } from '../module/ProjectController';

const useStyle = makeStyles({
  wrapper: {
    width: '100vw',
    height: '100vh',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
  }
})

interface ProjectEditorParams{
  projectNo: string;
}

const ProjectEditor = (props : MatchProps<ProjectEditorParams> & LocationProps) => {

  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <ProjectEditorNav/>
        <div className={classes.content}>
          <ProjectEditorMain/>
        </div>
      </div>
    </div>
  );
}

export default ProjectEditor;
