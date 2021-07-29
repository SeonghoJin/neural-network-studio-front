import { useCallback } from 'react';
import {
  getProjectConfigThunk,
  putProjectConfigThunk,
} from '../../../../module/API/project/thunks';
import { RootDispatch } from '../../../../module';
import { useDispatch } from 'react-redux';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import ProjectConfigNavOptionContent from './ProjectConfigNavOptionContent';
import useProjectLocation from '../../../../hooks/useProjectLocation';

const ProjectConfigNavOptionContentContainer = () => {

  const dispatch : RootDispatch = useDispatch();
  const [projectConfig] = useProjectConfig();
  const {projectNo} = useProjectLocation();

  const onSave = useCallback(() => {
    dispatch(putProjectConfigThunk(projectNo, projectConfig))
    .then(async (res) => {
      if(!res)return;
      dispatch(getProjectConfigThunk(projectNo));
    })
  }, [projectConfig, projectNo]);

  return <ProjectConfigNavOptionContent
    onSave={onSave}
  />

}

export default ProjectConfigNavOptionContentContainer;
