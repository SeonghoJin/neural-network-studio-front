import useProjectInfo from '../../../../hooks/useProjectInfo';
import { makeStyles } from '@material-ui/core';
import CircleLoading from '../../../Loading/CircularLoading';
import { ChangeEvent, useCallback } from 'react';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
  }
})

const ProjectInfoConfigViewer = () => {
  const [projectInfo, setProjectInfo] = useProjectInfo();
  const classes = useStyle();

  const onChange = useCallback((e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setProjectInfo({
      ...projectInfo,
      [name] : value,
    })
    console.log(e.target.name);
  },[projectInfo])

  const content = (
    <>
      <input
        name={"name"} value={projectInfo.name || ""}
        onChange={onChange}
        />
      <textarea
        name={"description"}
        value={projectInfo.description || ""}
        onChange={onChange}/>
    </>
  )
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {projectInfo.name == null ? <CircleLoading/> : content}
      </div>
    </div>
  )
}

export default ProjectInfoConfigViewer;
