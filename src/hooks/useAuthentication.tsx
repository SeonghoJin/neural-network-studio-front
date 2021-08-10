import { useSelector } from 'react-redux';

import { RootState } from '../module';
import { UserType } from '../module/Auth';

const useAuthentication = () => {
	const user = useSelector((state: RootState) => state.auth.user);
	const isAuthentication = user?.type === UserType.Login;

	return {
		user,
		isAuthentication,
	};
};

export default useAuthentication;
