import { getPythonCodeState, getPythonCodeTypes } from './types';
import { createReducer } from 'typesafe-actions';
import { getPythonCodeAction } from './actions';

const initialState : getPythonCodeState = {
  loading : false,
  error : null,
  data : null,
}

const getPythonCode = createReducer<getPythonCodeState, getPythonCodeTypes>(
  initialState
, {
    [getPythonCodeAction.GET_PYTHON_CODE]: (state) => ({
      ...state,
      loading: true,
      error: null,
      data: null,
    }),
    [getPythonCodeAction.GET_PTYHON_CODE_SUCCESS]: (state, action) => ({
      ...state,
      loading: false,
      error: null,
      data: action.payload,
    }),
    [getPythonCodeAction.GET_PYTHON_CODE_ERROR]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
      data: null
    }),
  })

export default getPythonCode;
