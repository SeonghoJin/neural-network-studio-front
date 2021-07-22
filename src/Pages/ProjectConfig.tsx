import { makeStyles } from '@material-ui/core';
import useGetProjectResult from '../hooks/useGetProjectResult';
import { ProjectProps } from '../Components/project/type';
import useProjectConfigController
  from '../Components/project/projectConfig/projectConfigController';
import ProjectNav from '../Components/project/ProjectNav/projectNav';
import ProjectEditorMain from '../Components/project/projectEditor/projectEditorMain';
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

const useProjectConfigError = (props: ProjectProps) => {
  const getProjectResult = useGetProjectResult()
  return (
    <>
      {getProjectResult.error && (getProjectResult.errorModal)}
    </>
  )
}

export const ProjectConfig = (props: ProjectProps) => {
  const classes = useStyle();
  const errorModal = useProjectConfigError(props);
  useProjectConfigController(props);
  return (
    <>
      {errorModal}
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <ProjectNav/>
          <div className={classes.content}>
          </div>
        </div>
      </div>
    </>
  )
}

