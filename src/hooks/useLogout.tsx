import { useCallback, useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
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
	const { enqueueSnackbar } = useSnackbar();
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
				enqueueSnackbar('로그아웃되었습니다.', { variant: 'success' });
				return true;
			} catch (e: AxiosError | any) {
				setResult({
					data: null,
					loading: false,
					error: e,
				});
				enqueueSnackbar('로그아웃에 실패했습니다. 페이지를 새로고침해주세요.', { variant: 'error' });
				return false;
			}
		});
	}, [enqueueSnackbar, history, mutate, setResult]);

	return {
		fetch,
		...result,
		loading: result?.loading,
		loadingFallback: <SimpleBackdrop open />,
	};
};

export default useLogout;
