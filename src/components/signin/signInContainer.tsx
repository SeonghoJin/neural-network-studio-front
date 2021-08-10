import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RootDispatch } from '../../module';
import { loginThunks } from '../../module/API/auth/thunks';
import { getUserProfileThunks } from '../../module/API/user/thunks';
import { setAuthentication, UserType } from '../../module/Auth';
import useLoginResult from '../../hooks/APIResult/auth/useLoginResult';
import SignIn from './signin';

const SignInContainer = () => {
	const thunkDispatch: RootDispatch = useDispatch();
	const dispatch = useDispatch();
	const requestLogin = useCallback(
		(inputs: any) => {
			thunkDispatch(loginThunks(inputs))
				.then(async (res) => {
					if (!res) return null;
					const response = await thunkDispatch(getUserProfileThunks());
					return response;
				})
				.then((res) => {
					if (!res) return;
					dispatch(
						setAuthentication({
							user: {
								type: UserType.Login,
								profile: res,
							},
						})
					);
				});
		},
		[dispatch, thunkDispatch]
	);
	return (
		<>
			<SignIn requestLogin={requestLogin} />
		</>
	);
};

export default SignInContainer;
