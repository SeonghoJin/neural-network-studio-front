import useProjectInfo from '../../../../hooks/useProjectInfo';
import { makeStyles } from '@material-ui/core';
import CircleLoading from '../../../Loading/CircularLoading';
import { ChangeEvent, useCallback } from 'react';
import useGetProjectResult from '../../../../hooks/useGetProjectResult';
import TextInput from '../../../Input/TextInput';

const useStyle = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
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
      <TextInput
        onChange={onChange}
        propertyName={"name"}
        propertyContent={projectInfo?.name|| ""}/>
      <TextInput
        onChange={onChange}
        propertyName={"description"}
        propertyContent={projectInfo?.description || ""}/>
    </>
  )
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        {(getProjectInfoResult.error || getProjectInfoResult.loading) ? <CircleLoading/> : content}
      </div>
    </div>
  )
};

export default ProjectInfoConfigViewer;
