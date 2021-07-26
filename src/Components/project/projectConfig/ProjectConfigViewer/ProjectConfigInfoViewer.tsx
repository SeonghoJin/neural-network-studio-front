import useProjectInfo from '../../../../hooks/useProjectInfo';
import { makeStyles } from '@material-ui/core';
import CircleLoading from '../../../Loading/CircularLoading';
import { ChangeEvent, useCallback } from 'react';
import useGetProjectResult from '../../../../hooks/useGetProjectResult';

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
  const getProjectInfoResult = useGetProjectResult();
  const [projectInfo, setProjectInfo] = useProjectInfo();
  const classes = useStyle();

  const onChange = useCallback((e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    if(projectInfo != null){
      setProjectInfo({
        ...projectInfo,
        [name]: value
      });
    }
  },[projectInfo])

  const content = getProjectInfoResult.data && (
    <>
      <input
        name={"name"} value={projectInfo?.name || ""}
        onChange={onChange}
        />
      <textarea
        name={"description"}
        value={projectInfo?.description || ""}
        onChange={onChange}/>
    </>
  )
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {(getProjectInfoResult.error || getProjectInfoResult.loading) ? <CircleLoading/> : content}
      </div>
    </div>
  )
}

export default ProjectInfoConfigViewer;
