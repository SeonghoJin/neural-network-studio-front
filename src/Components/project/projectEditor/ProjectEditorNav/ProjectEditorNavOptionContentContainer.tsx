import ProjectEditorNavOptionContent from "./ProjectEditorNavOptionContent"
import { useCallback } from 'react';
import { getProjectThunk, updateProjectContentThunk } from '../../../../module/API/project/thunks';
import { RootDispatch, RootState } from '../../../../module';
import { useDispatch, useSelector } from 'react-redux';
import useGetProjectResult from '../../../../hooks/useGetProjectResult';
import { useLocation } from 'react-router-dom';
import useProjectLocation from '../../../../hooks/useProjectLocation';

const ProjectEditorNavOptionContentContainer = () => {

  const dispatch: RootDispatch = useDispatch()
  const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
  const getProjectResult = useGetProjectResult();
  const {projectNo} = useProjectLocation();

  const onSave = useCallback(() => {
    dispatch(updateProjectContentThunk(
      projectNo, "", instance?.toObject() || getProjectResult.data?.content.flowState)
    ).then(async (res) => {
      if(!res)return;
      dispatch(getProjectThunk(projectNo));
    });
  }, [projectNo, instance, getProjectResult, projectNo]);

  return <ProjectEditorNavOptionContent
    onSave={onSave}
  />
}

export default ProjectEditorNavOptionContentContainer;
