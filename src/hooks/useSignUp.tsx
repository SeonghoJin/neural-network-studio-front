import { AxiosError } from 'axios';
import { atom, useRecoilState } from 'recoil';
import { useCallback, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { sleep } from '../util';
import { SignUpParams } from '../API/User/types';
import { signUp } from '../API/User';
import StandardModal from '../components/utils/modal/StandardModal';
import SuccessSnackbar from '../components/utils/Snackbar/SuccessSnackbar';
import SimpleBackdrop from '../components/utils/BackLoading';
import ErrorSnackbar from '../components/utils/Snackbar/ErrorSnackbar';

type SignUpResult = {
	error: null | string;
	loading: boolean;
	data: null | any;
} | null;

const signUpResultState = atom<SignUpResult>({
	key: 'signUpResultState',
	default: null,
});

const useSignUp = () => {
	const [result, setResult] = useRecoilState(signUpResultState);
	const { enqueueSnackbar } = useSnackbar();

	const fetch = useCallback(
		async (params: { passwordValidation: boolean; confirmPasswordValidation: boolean } & SignUpParams) => {
			setResult({
				loading: true,
				error: null,
				data: null,
			});

			const delayedData = await sleep(500).then(async () => {
				if (!params.confirmPasswordValidation) {
					setResult({
						loading: false,
						error: '비밀번호가 일치하지 않습니다.',
						data: null,
					});
					enqueueSnackbar('비밀번호가 일치하지 않습니다.', {
						variant: 'error',
					});
					return null;
				}
				if (!params.passwordValidation) {
					setResult({
						loading: false,
						error: '비밀번호는 반드시 기호, 영문, 숫자를 포함한 8자리이상으로 해야합니다.',
						data: null,
					});
					enqueueSnackbar('비밀번호는 반드시 기호, 영문, 숫자를 포함한 8자리이상으로 해야합니다.', {
						variant: 'error',
					});
					return null;
				}
				try {
					const data = await signUp(params);
					setResult({
						loading: false,
						error: null,
						data: data || true,
					});
					enqueueSnackbar('회원가입이 완료되었습니다.', { variant: 'success' });
					return data || true;
				} catch (e: any) {
					setResult({
						loading: false,
						error: (e as Error).message,
						data: null,
					});
					enqueueSnackbar((e as Error).message, { variant: 'error' });
					return null;
				}
			});

			return delayedData;
		},
		[enqueueSnackbar, setResult]
	);

	return {
		...result,
		fetch,
		error: result?.error,
		success: !!result?.data,
		loading: result?.loading,
		successFallback: <SuccessSnackbar message="회원가입이 완료되었습니다!" open />,
		loadingFallback: <SimpleBackdrop open />,
	};
};
export default useSignUp;
