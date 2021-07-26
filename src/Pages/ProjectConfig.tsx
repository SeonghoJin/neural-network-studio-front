import { makeStyles } from '@material-ui/core';
import ProjectNav from '../Components/project/ProjectNav/projectNav';
import useGetProjectConfigResult from '../hooks/useGetProjectConfigResult';
import ProjectConfigNav
  from '../Components/project/projectConfig/projectConfigNav/projectConfigNav';
import usePutProjectConfigResult from '../hooks/usePutProjectConfigResult';
import usePutProjectInfoResult from '../hooks/usePutProjectInfoResult';
import ProjectConfigMainContainer
  from '../Components/project/projectConfig/ProjectConfigMainContainer';
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

const ProjectConfigError = () => {
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

export const ProjectConfig = () => {

  const classes = useStyle();

  return (
    <>
      <ProjectConfigError/>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <ProjectNav/>
          <ProjectConfigNav/>
          <div className={classes.content}>
            <ProjectConfigMainContainer/>
          </div>
        </div>
      </div>
    </>
  )
}

