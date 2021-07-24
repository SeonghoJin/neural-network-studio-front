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

interface Props{
  value: number;
  setValue: (num: number) => void
}

const ProjectConfigSideBar = (props: Props) => {
  const {value, setValue} = props;
  const classes = useStyle();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <ProjectConfigViewerSelector
          value={value}
          setValue={setValue}
        />
      </div>
    </div>
  );
};

export default ProjectConfigSideBar;
