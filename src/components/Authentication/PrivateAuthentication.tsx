import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import useAuthentication, { UserType } from '../../hooks/useAuthentication';
import ErrorSnackbar from '../utils/Snackbar/ErrorSnackbar';

type Props = {
	children: any;
};

const PrivateAuthentication = ({ children }: Props) => {
	const { user } = useAuthentication();
	const history = useHistory();

	useEffect(() => {
		if (user?.type === UserType.Visitor) {
			history.push('/login', {
				type: 'error',
				message: '로그인이 필요합니다.',
			});
		}
	}, [history, user?.type]);

	return <>{user?.type === UserType.Login && children}</>;
};

export default PrivateAuthentication;
