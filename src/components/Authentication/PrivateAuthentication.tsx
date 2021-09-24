import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import useAuthentication, { UserType } from '../../hooks/useAuthentication';
import ErrorSnackbar from '../utils/Snackbar/ErrorSnackbar';

type Props = {
	children: any;
};

const PrivateAuthentication = ({ children }: Props) => {
	const { user } = useAuthentication();
	const { enqueueSnackbar } = useSnackbar();
	const history = useHistory();

	useEffect(() => {
		if (user?.type === UserType.Visitor) {
			enqueueSnackbar('로그인이 필요합니다.', { variant: 'error' });
			history.push('/login');
		}
	}, [enqueueSnackbar, history, user?.type]);

	return <>{user?.type === UserType.Login && children}</>;
};

export default PrivateAuthentication;
