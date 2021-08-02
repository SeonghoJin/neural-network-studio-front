import { createAsyncAction } from 'typesafe-actions';
import { UpdatedUserProfile, UserProfile } from '../../../API/User/types';

export enum UserAPIAction {
	GET_USER_PROFILE = 'GET_USER_PROFILE',
	GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS',
	GET_USER_PROFILE_ERROR = 'GET_USER_PROFILE_ERROR',
	UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE',
	UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS',
	UPDATE_USER_PROFILE_ERROR = 'UPDATE_USER_PROFILE_ERROR',
}

export const getUserProfileAsync = createAsyncAction(
	UserAPIAction.GET_USER_PROFILE,
	UserAPIAction.GET_USER_PROFILE_SUCCESS,
	UserAPIAction.GET_USER_PROFILE_ERROR
)<undefined, UserProfile, string>();

export const updateUserProfileAsync = createAsyncAction(
	UserAPIAction.UPDATE_USER_PROFILE,
	UserAPIAction.UPDATE_USER_PROFILE_SUCCESS,
	UserAPIAction.UPDATE_USER_PROFILE_ERROR
)<undefined, UpdatedUserProfile, string>();
