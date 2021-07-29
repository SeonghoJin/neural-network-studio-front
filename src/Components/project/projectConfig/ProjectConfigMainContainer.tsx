import ProjectConfigMain from "./projectConfigMain"
import { useDispatch } from 'react-redux';
import useGetProjectConfigResult from '../../../hooks/useGetProjectConfigResult';
import useGetProjectResult from '../../../hooks/useGetProjectResult';
import { useEffect } from 'react';
import { setProjectConfig } from '../../../module/projectConfig';
import { setProjectInfo } from '../../../module/projectInfo';
import { getProjectConfigThunk, getProjectThunk } from '../../../module/API/project/thunks';
import useProjectLocation from '../../../hooks/useProjectLocation';

const ProjectConfigMainContainer = () => {
  const dispatch = useDispatch();
  const projectConfigResult = useGetProjectConfigResult();
  const {projectNo} = useProjectLocation();

  useEffect(() => {
    if(projectConfigResult.data != null){
      dispatch(setProjectConfig(projectConfigResult.data))
    }
  }, [projectConfigResult.data]);

  useEffect(() => {
    dispatch(getProjectConfigThunk(projectNo));
  }, [projectNo])

  return <ProjectConfigMain/>
}

export default ProjectConfigMainContainer;
