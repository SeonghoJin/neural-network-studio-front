import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type APIActionTypes = ActionType<typeof actions>;

export type APIState = {
  putProjectConfigResult : {
    error : null | Error,
    loading: boolean,
    result: {
      data: null,
      check: boolean
    } | null
  },
  putProjectContentResult: {
    error : null | Error
    loading: boolean,
    result: {
      data: null,
      check: boolean,
    } | null
  },
};
