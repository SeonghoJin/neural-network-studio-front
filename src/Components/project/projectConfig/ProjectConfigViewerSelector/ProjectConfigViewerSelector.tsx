import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import ProjectConfigViewerSelectorItem from './ProjectConfigViewerSelectorItem';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }
})

const selectorItemHeads = [
  "Project Config",
  "Global Config",
  "Optimizer",
]


const ProjectConfigViewerSelector = () => {
  const classes = useStyle();
  const [value,setValue] = useState(0);
  const selectorItems = (
    <ul>
      {selectorItemHeads.map((head,index) => {
        return (
          <li key={index}>
            <ProjectConfigViewerSelectorItem head={head} active={value === index} onClick={setValue}/>
          </li>
        )})
      }
    </ul>
  )

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {selectorItems}
        </div>
      </div>
    </>
  )
};

export default ProjectConfigViewerSelector;
