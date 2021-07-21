import { createReducer } from 'typesafe-actions';
import { APIActionTypes, APIState } from './types';
import { APIAction } from './actions';

const initialState: APIState = {
  getPythonCodeResult: {
    error: null,
    loading: false,
    data: null,
  },
  getProjectResult: {
    loading: false,
    data: null,
    error: null,
  },
  putProjectConfigResult: {
    loading: false,
    error: null,
    result: null
  },
  putProjectContentResult: {
    loading: false,
    error: null,
    result: null,
  }
}

const api = createReducer<APIState, APIActionTypes>(initialState, {
  [APIAction.GET_PROJECT]: state => ({
    ...state,
    getProjectResult: {
      loading: true,
      error: null,
      data: null,
    }
  }),
  [APIAction.GET_PROJECT_SUCCESS]: (state, action) => ({
    ...state,
    getProjectResult: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [APIAction.GET_PROJECT_ERROR]: (state, action) => ({
    ...state,
    getProjectResult: {
      loading: false,
      error: action.payload,
      data: null,
    }
  }),
  [APIAction.PUT_PROJECT_CONFIG]: (state) => ({
    ...state,
    putProjectConfigResult: {
      loading: true,
      error: null,
      result: null,
    }
  }),
  [APIAction.PUT_PROJECT_CONFIG_SUCCESS]: (state) => ({
    ...state,
    putProjectConfigResult: {
      loading: true,
      error: null,
      result: {
        check: true,
        data: null
      },
    }
  }),
  [APIAction.PUT_PROJECT_CONFIG_ERROR]: (state, action) => ({
    ...state,
    putProjectConfigResult: {
      loading: true,
      error: action.payload,
      result: null,
    }
  }),
  [APIAction.PUT_PROJECT_CONTENT]: (state) => ({
    ...state,
    putProjectContentResult: {
      loading: true,
      error: null,
      result: null,
    }
  }),
  [APIAction.PUT_PROJECT_CONTENT_SUCCESS]: (state) => ({
    ...state,
    putProjectContentResult: {
      loading: false,
      error: null,
      result: {
        data: null,
        check: true
      },
    }
  }),
  [APIAction.PUT_PROJECT_CONTENT_ERROR]: (state, action) => ({
    ...state,
    putProjectContentResult: {
      loading: true,
      error: action.payload,
      result: null,
    }
  }),
  [APIAction.GET_PYTHON_CODE]: (state) => ({
    ...state,
    getPythonCodeResult: {
      loading: true,
      error: null,
      data: null,
    }
  }),
  [APIAction.GET_PTYHON_CODE_SUCCESS]: (state, action) => ({
    ...state,
    getPythonCodeResult: {
      loading: false,
      error: null,
      data: action.payload,
    }
  }),
  [APIAction.GET_PYTHON_CODE_ERROR]: (state, action) => ({
    ...state,
    getPythonCodeResult:{
      loading: false,
      error: action.payload,
      data: null
    }
  }),
});

export default api;
