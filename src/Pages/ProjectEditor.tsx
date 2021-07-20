import { LocationProps, MatchProps } from '../core/types';
import ProjectEditorNav from '../Components/projectEditor/projectEditorNav';
import { makeStyles } from '@material-ui/core';
import ProjectEditorMain from '../Components/projectEditor/projectEditorMain';

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
  const projectNo = props.match?.params?.projectNo;
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
