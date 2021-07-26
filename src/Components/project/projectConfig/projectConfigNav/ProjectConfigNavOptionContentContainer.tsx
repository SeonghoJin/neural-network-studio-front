import { useCallback } from 'react';
import {
  getProjectConfigThunk,
  getProjectThunk,
  putProjectConfigThunk,
  putProjectInfoThunk
} from '../../../../module/API/project/thunks';
import { RootDispatch } from '../../../../module';
import { useDispatch } from 'react-redux';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import useProjectInfo from '../../../../hooks/useProjectInfo';
import ProjectConfigNavOptionContent from './ProjectConfigNavOptionContent';
import useProjectLocation from '../../../../hooks/useProjectLocation';

const ProjectConfigNavOptionContentContainer = () => {

  const dispatch : RootDispatch = useDispatch();
  const [projectConfig] = useProjectConfig();
  const [projectInfo] = useProjectInfo();
  const {projectNo} = useProjectLocation();

  const onSave = useCallback(() => {
    if(projectInfo.name == null || projectInfo.description == null)return;
    dispatch(putProjectInfoThunk(
      projectNo, projectInfo.name, projectInfo.description
    )).then(async (res) => {
      if(!res)return false;
      return await dispatch(putProjectConfigThunk(projectNo, projectConfig))
    }).then(async (res) => {
      if(!res)return;
      dispatch(getProjectThunk(projectNo));
      dispatch(getProjectConfigThunk(projectNo));
    })
  }, [projectConfig, projectNo, projectInfo]);

  return <ProjectConfigNavOptionContent
    onSave={onSave}
  />

}

export default ProjectConfigNavOptionContentContainer;
