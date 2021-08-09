import React, { useCallback } from 'react';
import SignIn from './signin';
import useLoginResult from '../../hooks/APIResult/auth/useLoginResult';
import { LoginParams } from '../../API/Auth/types';

const SignInContainer = () => {
	const { fetch } = useLoginResult();
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
