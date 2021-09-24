import { useCallback, useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { AxiosError } from 'axios';
import { useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import StandardModal from '../components/utils/modal/StandardModal';
import { login } from '../API/Auth';
import { LoginParams } from '../API/Auth/types';
import SimpleBackdrop from '../components/utils/BackLoading';
import { sleep } from '../util';
import ErrorSnackbar from '../components/utils/Snackbar/ErrorSnackbar';

type LoginRequestResult = {
	error: AxiosError | null;
	data: unknown;
	loading: boolean;
} | null;

export const loginRequestResult = atom<LoginRequestResult>({
	key: 'loginRequestResult',
	default: null,
});

export const useLogin = () => {
	const [result, setResult] = useRecoilState(loginRequestResult);
	const { enqueueSnackbar } = useSnackbar();

	const fetch = useCallback(
		async (param: LoginParams) => {
			setResult({
				error: null,
				data: null,
				loading: true,
			});

			const state = sleep(300).then(async () => {
				try {
					const response = await login(param);
					setResult(() => ({
						loading: false,
						error: null,
						data: response,
					}));
					return true;
				} catch (e: AxiosError | any) {
					setResult({
						data: null,
						loading: false,
						error: e,
					});
					enqueueSnackbar('로그인하지 못했습니다. 다시 시도해주십시요.', { variant: 'error' });
					return false;
				}
			});

			return state;
		},

		[enqueueSnackbar, setResult]
	);

	useEffect(() => {
		return () => {
			setResult(null);
		};
	}, [setResult]);

	return {
		fetch,
		...result,
		loading: result?.loading,
		loadingFallback: <SimpleBackdrop open />,
	};
};

export default useLogin;
