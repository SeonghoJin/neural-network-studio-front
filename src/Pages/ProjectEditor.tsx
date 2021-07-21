import { LocationProps, MatchProps } from '../core/types';
import ProjectEditorNav from '../Components/projectEditor/ProjectEditorNav/projectEditorNav';
import { makeStyles, Modal } from '@material-ui/core';
import ProjectEditorMain from '../Components/projectEditor/projectEditorMain';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../module';
import { useEffect } from 'react';
import { getProjectThunk } from '../module/API/thunks';

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
  const projectNo = props.match?.params?.projectNo as string;
  const {data, loading, error} = useSelector((state: RootState) => state.api.getProjectResult);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjectThunk(projectNo));
  }, [projectNo])

  const classes = useStyle();

  const content = data && (<>
    <ProjectEditorNav/>
    <div className={classes.content}>
      <ProjectEditorMain/>
    </div>
  </>);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {loading && <span>loading..</span>}
        {error&& <span>{error}</span>}
        {content}
      </div>
    </div>
  );
}

export default ProjectEditor;
