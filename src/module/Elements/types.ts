import { Elements } from 'react-flow-nns';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ElementActionTypes = ActionType<typeof actions>;
export type ElementState = {
	elements: Elements;
};
