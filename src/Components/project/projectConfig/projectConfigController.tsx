import { useDispatch, useSelector } from 'react-redux';
import {
  initProjectControllerAction,
  ProjectControllerAction
} from '../../../module/ProjectEditorController';
import {
  getProjectThunk,
} from '../../../module/API/project/thunks';
import { useEffect } from 'react';
import { RootDispatch, RootState } from '../../../module';
import { ProjectProps } from '../type';

const useProjectConfigController = async (props : ProjectProps) => {
  const action = useSelector((state : RootState) => (state.projectController.action));
  const projectNo = (props.match?.params?.projectNo || '0');
  const thunkDispatch : RootDispatch = useDispatch();
  const dispatch = useDispatch();

  useEffect(() => {
    if(action === ProjectControllerAction.GET_PROJECT) {
      thunkDispatch(getProjectThunk(projectNo));
    }

    if(action !== null){
      dispatch(initProjectControllerAction());
    }
  }, [action]);

  return action;
}

export default useProjectConfigController;
