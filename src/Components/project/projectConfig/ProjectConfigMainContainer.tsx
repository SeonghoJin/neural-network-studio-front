import ProjectConfigMain from "./projectConfigMain"
import { useDispatch } from 'react-redux';
import useGetProjectConfigResult from '../../../hooks/useGetProjectConfigResult';
import useGetProjectResult from '../../../hooks/useGetProjectResult';
import { useEffect } from 'react';
import { setProjectConfig } from '../../../module/projectConfig';
import { setProjectInfo } from '../../../module/projectInfo';
import { useLocation } from 'react-router-dom';
import { getProjectConfigThunk, getProjectThunk } from '../../../module/API/project/thunks';
import useProjectLocation from '../../../hooks/useProjectLocation';

const ProjectConfigMainContainer = () => {
  const dispatch = useDispatch();
  const projectConfigResult = useGetProjectConfigResult();
  const projectInfoResult = useGetProjectResult();
  const {projectNo} = useProjectLocation();

  useEffect(() => {
    if(projectConfigResult.data != null){
      dispatch(setProjectConfig(projectConfigResult.data))
    }
  }, [projectConfigResult.data]);

  useEffect(() => {
    if(projectInfoResult.data != null){
      dispatch(setProjectInfo({
        name: projectInfoResult.data.name,
        description: projectInfoResult.data.description,
      }))
    }
  }, [projectInfoResult.data]);

  useEffect(() => {
    dispatch(getProjectThunk(projectNo))
    dispatch(getProjectConfigThunk(projectNo));
  }, [projectNo])

  return <ProjectConfigMain/>
}

export default ProjectConfigMainContainer;
