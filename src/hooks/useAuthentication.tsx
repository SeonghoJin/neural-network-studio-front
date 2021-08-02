import { useSelector } from 'react-redux';

import { RootState } from '../module';

const useAuthentication = () => {
	const user = useSelector((state: RootState) => state.auth.user);
	const isAuthentication = user.profile != null;

	return {
		user,
		isAuthentication,
	};
};

export default useAuthentication;
