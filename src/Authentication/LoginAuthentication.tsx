import { Redirect } from 'react-router-dom';
import useAuthentication from '../hooks/useAuthentication';

type Props = {
	children: any;
};

const LoginAuthentication = ({ children }: Props) => {
	const { isAuthentication } = useAuthentication();

	if (!isAuthentication) {
		alert('로그인이 필요합니다.');
		return <Redirect to="/login" />;
	}

	return <>{children}</>;
};

export default LoginAuthentication;
