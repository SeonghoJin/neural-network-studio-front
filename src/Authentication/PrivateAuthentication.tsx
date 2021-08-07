import { Redirect } from 'react-router-dom';
import { useCallback } from 'react';
import useGetUserProfileResult from '../hooks/APIResult/user/useGetUserProfileResult';
import useAuthentication from '../hooks/useAuthentication';
import { UserType } from '../module/Auth';

type Props = {
	children: any;
};

const PrivateAuthentication = ({ children }: Props) => {
	const { data, error } = useGetUserProfileResult();
	const { user } = useAuthentication();
	const errorComponent = useCallback(() => {
		if (user.type === UserType.Visitor) {
			alert('로그인이 필요합니다.');
			return <Redirect to="/login" />;
		}
		return <Redirect to="/" />;
	}, [user]);

	return (
		<>
			{data && children}
			{error && errorComponent()}
		</>
	);
};

export default PrivateAuthentication;
