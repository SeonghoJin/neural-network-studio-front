import React, { useCallback } from 'react';
import SignIn from './signin';
import useLogin from '../../../hooks/useLogin';
import { LoginParams } from '../../../API/Auth/types';

const SignInContainer = () => {
	const { fetch } = useLogin();
	const requestLogin = useCallback(
		async (inputs: LoginParams) => {
			const result = await fetch(inputs);
			if (!result) return;
			window.location.href = '/';
		},
		[fetch]
	);
	return (
		<>
			<SignIn requestLogin={requestLogin} />
		</>
	);
};

export default SignInContainer;
