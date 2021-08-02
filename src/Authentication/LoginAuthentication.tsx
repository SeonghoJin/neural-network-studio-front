import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import useAuthentication from '../hooks/useAuthentication';
import { RootDispatch } from '../module';
import { getUserProfileThunks } from '../module/API/user/thunks';
import { setAuthentication, UserType } from '../module/Auth';
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
