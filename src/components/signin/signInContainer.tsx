import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootDispatch } from '../../module';
import { loginThunks } from '../../module/API/auth/thunks';
import SignIn from './signin';

const SignInContainer = () => {
	const thunkDispatch: RootDispatch = useDispatch();
	const requestLogin = useCallback(
		(inputs: any) => {
			thunkDispatch(loginThunks(inputs)).then((res) => {
				if (!res) return;
				window.location.href = '/';
			});
		},
		[thunkDispatch]
	);
	return (
		<>
			<SignIn requestLogin={requestLogin} />
		</>
	);
};

export default SignInContainer;
