import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
export type getPythonCodeTypes = ActionType<typeof actions>;
export type getPythonCodeState = {
  error: Error | null,
  loading: boolean,
  data: string | null,
};
