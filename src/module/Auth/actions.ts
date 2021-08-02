import { createStandardAction } from '../../util';
import { AuthenticationState } from './types';

export enum AuthenticationAction {
	SET_AUTHENTICATION = 'SET_AUTHENTICATION',
}

export const setAuthentication = createStandardAction(AuthenticationAction.SET_AUTHENTICATION)<AuthenticationState>();
