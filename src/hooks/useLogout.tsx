import { useCallback, useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';
import { logout } from '../API/Auth';
import StandardModal from '../components/utils/modal/StandardModal';
import useAuthentication from './useAuthentication';
import SimpleBackdrop from '../components/utils/BackLoading';
import SuccessSnackbar from '../components/utils/Snackbar/SuccessSnackbar';
import ErrorSnackbar from '../components/utils/Snackbar/ErrorSnackbar';
import { sleep } from '../util';
import { StaticPath } from '../components/PagePathConsts';

type LogoutRequestResult = {
	error: null | AxiosError;
	data: unknown;
	loading: boolean;
} | null;

const logoutRequestResult = atom<LogoutRequestResult>({
	key: 'logoutRequestResult',
	default: null,
});

export const useLogout = () => {
	const [result, setResult] = useRecoilState(logoutRequestResult);
	const history = useHistory();
	const { mutate } = useAuthentication();
	const fetch = useCallback(async () => {
		setResult({
			error: null,
			data: null,
			loading: true,
		});

		sleep(500).then(async () => {
			try {
				const response = await logout();
				setResult((state) => ({
					loading: false,
					error: null,
					data: response || true,
				}));
				history.push(StaticPath.MAIN);
				await mutate();
				return true;
			} catch (e: AxiosError | any) {
				setResult({
					data: null,
					loading: false,
					error: e,
				});
				return false;
			}
		});
	}, [history, mutate, setResult]);

	return {
		fetch,
		...result,
		loading: result?.loading,
		error: result?.error,
		success: !!result?.data,
		loadingFallback: <SimpleBackdrop open />,
		successFallback: <SuccessSnackbar message="로그아웃되었습니다." open />,
		errorFallback: <ErrorSnackbar message="로그아웃에 실패했습니다. 페이지를 새로고침해주세요." open />,
	};
};

export default useLogout;
