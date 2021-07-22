import { makeStyles } from '@material-ui/core';
import { ProjectProps } from '../Components/project/type';
import ProjectNav from '../Components/project/ProjectNav/projectNav';
import ProjectConfigMain from '../Components/project/projectConfig/projectConfigMain';
import useGetProjectConfigResult from '../hooks/useGetProejctConfigResult';
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

  return (
    <>
      {getProjectConfigResult.error && getProjectConfigResult.errorModal}
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
          <div className={classes.content}>
            <ProjectConfigMain/>
          </div>
        </div>
      </div>
    </>
  )
}

