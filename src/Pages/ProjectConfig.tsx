import { makeStyles } from '@material-ui/core';
import { ProjectProps } from '../Components/project/type';
import ProjectNav from '../Components/project/ProjectNav/projectNav';
import ProjectConfigMain from '../Components/project/projectConfig/projectConfigMain';
import useGetProjectConfigResult from '../hooks/useGetProjectConfigResult';
import ProjectConfigNav
  from '../Components/project/projectConfig/projectConfigNav/projectConfigNav';
import usePutProjectConfigResult from '../hooks/usePutProjectConfigResult';
import usePutProjectInfoResult from '../hooks/usePutProjectInfoResult';
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

const ProjectConfigError = (props: ProjectProps) => {
  const getProjectConfigResult = useGetProjectConfigResult();
  const putProjectConfigResult = usePutProjectConfigResult();
  const putProjectInfoResult = usePutProjectInfoResult();
  return (
    <>
      {getProjectConfigResult.error && getProjectConfigResult.errorModal}
      {putProjectConfigResult.error && putProjectConfigResult.errorModal}
      {putProjectInfoResult.error && putProjectInfoResult.errorModal}
    </>
  )
};

export const ProjectConfig = (props: ProjectProps) => {
  const classes = useStyle();

  return (
    <>
      <ProjectConfigError match={props.match}/>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <ProjectNav/>
          <ProjectConfigNav/>
          <div className={classes.content}>
            <ProjectConfigMain/>
          </div>
        </div>
      </div>
    </>
  )
}

