import { Redirect } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import useGetUserProfileResult from '../hooks/APIResult/user/useGetUserProfileResult';

type Props = {
	children: any;
};

const LoginAuthentication = ({ children }: Props) => {
	const { data, error } = useGetUserProfileResult();

	const errorComponent = useCallback(() => {
		alert('로그인이 필요합니다.');
		return <Redirect to="/login" />;
	}, []);

	return (
		<>
			{data && children}
			{error && errorComponent()}
		</>
	);
};

export default LoginAuthentication;
