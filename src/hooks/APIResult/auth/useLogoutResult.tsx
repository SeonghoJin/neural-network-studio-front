import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../../../module';
import StandardModal from '../../../components/utils/modal/StandardModal';
import { initLogout } from '../../../module/API/auth';

const useLoginResult = () => {
	const result = useSelector((state: RootState) => state.authApi.logoutResult);
	const dispatch = useDispatch();
	const handleError = useCallback(() => {
		dispatch(initLogout());
	}, [dispatch]);

	return {
		...result,
		errorModal: <StandardModal head="error" body={result.error} onClose={handleError} />,
	};
};

export default useLoginResult;
