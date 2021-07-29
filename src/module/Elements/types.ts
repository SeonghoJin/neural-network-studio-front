import { Elements } from 'react-flow-renderer';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions'
export type ElementActionTypes = ActionType<typeof actions>
export type ElementState = {
  elements : Elements
};
