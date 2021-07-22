import { SyntheticEvent } from 'react';
import { makeStyles } from '@material-ui/core';

interface ProjectConfigViewerSelectorItemProps{
  head: string,
  active: boolean,
  onClick?: (value: number) => void,
}

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100px',
  },
  container: {
    width: '100%',
    height: '100%',
    padding: '10px',

    '&:hover': {
      backgroundColor: '#FFFFFF'
    },
  },
  active: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF'
  }
})

const ProjectConfigViewerSelectorItem = (props: ProjectConfigViewerSelectorItemProps) => {
  const classes = useStyle();
  const {head, onClick, active} = props;
  return (
    <div className={classes.wrapper}>
      <div className={`${classes.container} ${active && classes.active}`}>
        {head}
      </div>
    </div>
  )
}

export default ProjectConfigViewerSelectorItem;
