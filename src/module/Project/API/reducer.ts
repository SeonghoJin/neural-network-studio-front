import { createReducer } from 'typesafe-actions';
import { APIActionTypes, APIState } from './types';
import { APIAction } from './actions';

const initialState: APIState = {
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
});

export default api;
