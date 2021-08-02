import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../../../module';
import StandardModal from '../../../components/utils/modal/StandardModal';
import { initLogin } from '../../../module/API/auth';

const useLoginResult = () => {
	const result = useSelector((state: RootState) => state.authApi.loginResult);
	const dispatch = useDispatch();
	const handleError = useCallback(() => {
		dispatch(initLogin());
	}, [dispatch]);

	return {
		...result,
		errorModal: (
			<StandardModal
				head="error"
				body="아이디 혹은 비밀번호가 잘못되었습니다. 다시 로그인해주십시요."
				onClose={handleError}
			/>
		),
	};
};

export default useLoginResult;
