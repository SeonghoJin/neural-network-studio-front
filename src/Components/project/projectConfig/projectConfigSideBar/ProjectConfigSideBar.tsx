import { makeStyles } from '@material-ui/core';
import ProjectConfigViewerSelector from '../ProjectConfigViewerSelector/ProjectConfigViewerSelector';

const useStyle = makeStyles({
  wrapper: {
    width: 260,
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: '#F7F7F7',
  },
});

const ProjectConfigSideBar = () => {
  const classes = useStyle();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <ProjectConfigViewerSelector/>
      </div>
    </div>
  );
};

export default ProjectConfigSideBar;
