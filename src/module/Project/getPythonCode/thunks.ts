import { ThunkAction } from 'redux-thunk';
import ProjectConfig from '../../../core/project/config';
import { RootState } from '../../index';
import { getPythonCodeTypes } from './types';
import { getPythonCodeAsync } from './actions';
import { getPythonCode } from '../../../API/project';

export function getPythonCodeThunk(graph: any, projectConfig: ProjectConfig) :
  ThunkAction<void, RootState, null, getPythonCodeTypes> {
  return async dispatch => {
    const {request, success, failure} = getPythonCodeAsync;
    console.log(graph);
    dispatch(request());
    try {
      const pythonCode = await getPythonCode(graph, projectConfig);
      dispatch(success(pythonCode));
    } catch (e) {
      dispatch(failure(e));
    }
  }
}
