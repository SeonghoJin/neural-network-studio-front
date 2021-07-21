import { RootState } from '../..';
import { APIActionTypes } from './types';
import { ThunkAction } from 'redux-thunk';
import { putProjectContentAsync } from './actions';
import { updateProjectContent } from '../../../API/project';
import { ReactFlowState } from '../../ReactFlow';

export function updateProjectContentThunk(projectNo: string , projectContent: { output: string; flowState: ReactFlowState})
: ThunkAction<void, RootState, null, APIActionTypes>{
  return async dispatch => {
    const {request, success, failure} = putProjectContentAsync;
    dispatch(request());
    try{
      await updateProjectContent(projectNo, projectContent);
      dispatch(success());
    }catch (e) {
      dispatch(failure(e.message));
    }
  }
}
