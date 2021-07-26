import { useDispatch, useSelector } from 'react-redux';
import ProjectEditorNavMainContent from './ProjectEditorNavMainContent';
import { useCallback, useEffect } from 'react';
import {
  getProjectThunk,
  getPythonCodeThunk,
  updateProjectContentThunk
} from '../../../../module/API/project/thunks';
import { RootDispatch, RootState } from '../../../../module';
import { useLocation } from 'react-router-dom';
import fileDownload from 'js-file-download';
import useProjectLocation from '../../../../hooks/useProjectLocation';

const ProjectEditorNavMainContentContainer = () => {

  const {projectNo} = useProjectLocation();
  const thunkDispatch : RootDispatch = useDispatch();
  const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);

  const onGetPythonCode = useCallback(() => {
    const exec = async () => {
      await thunkDispatch(updateProjectContentThunk(
        projectNo, "", instance?.toObject()
      )).then(async (res) => {
        if(res){
          thunkDispatch(getProjectThunk(projectNo));
          return await thunkDispatch(getPythonCodeThunk(projectNo));
        }
        return null;
      }).then(async (res) => {
        if(res != null){
          fileDownload(res, 'module.py');
        }
      })
    }
    exec();
  }, [instance, projectNo]);


  return <ProjectEditorNavMainContent
    onGetPythonCode={onGetPythonCode}
  />
}

export default ProjectEditorNavMainContentContainer;
