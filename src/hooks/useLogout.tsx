import { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import { logout } from '../API/Auth';
import StandardModal from '../components/utils/modal/StandardModal';
import useAuthentication from './useAuthentication';
import SimpleBackdrop from '../components/utils/BackLoading';

const logoutRequestResult = atom({
	key: 'logoutRequestResult',
	default: {
		error: null,
		data: null,
		loading: false,
	},
});

export const useLogout = () => {
	const [result, setResult] = useRecoilState(logoutRequestResult);
	const { mutate } = useAuthentication();
	const history = useHistory();
	const fetch = useCallback(async () => {
		setResult({
			error: null,
			data: null,
			loading: true,
		});
		try {
			const response = await logout();
			setResult((state) => ({
				loading: false,
				error: null,
				data: response || true,
			}));
			return true;
		} catch (e) {
			setResult({
				data: null,
				loading: false,
				error: e,
			});
			return false;
		}
	}, [setResult]);
	return {
		fetch,
		...result,
		loadingFeedback: result.loading && <SimpleBackdrop open={result.loading} />,
		successFeedback: result.data && (
			<StandardModal
				head="로그아웃 되었습니다."
				body=""
				onClose={async () => {
					history.push('/');
					await mutate();
					setResult({
						loading: false,
						error: null,
						data: null,
					});
				}}
			/>
		),
		errorFeedback: result.error && <StandardModal head={result.error} />,
	};
};

export default useLogout;
