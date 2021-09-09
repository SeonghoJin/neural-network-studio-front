import { AxiosError } from 'axios';
import { atom, useRecoilState } from 'recoil';
import { useCallback, useEffect } from 'react';
import { sleep } from '../util';
import { SignUpParams } from '../API/User/types';
import { signUp } from '../API/User';
import StandardModal from '../components/utils/modal/StandardModal';
import SuccessSnackbar from '../components/utils/Snackbar/SuccessSnackbar';
import SimpleBackdrop from '../components/utils/BackLoading';

type SignUpResult = {
	error: null | AxiosError;
	loading: boolean;
	data: null | any;
} | null;

const signUpResultState = atom<SignUpResult>({
	key: 'signUpResultState',
	default: null,
});

const useSignUp = () => {
	const [result, setResult] = useRecoilState(signUpResultState);

	const fetch = useCallback(
		async (params: SignUpParams) => {
			setResult({
				loading: true,
				error: null,
				data: null,
			});

			const delayedData = await sleep(500).then(async () => {
				try {
					const data = await signUp(params);
					setResult({
						loading: false,
						error: null,
						data: data || true,
					});
					return data || true;
				} catch (e: AxiosError | any) {
					setResult({
						loading: false,
						error: e,
						data: null,
					});
					return null;
				}
			});

			return delayedData;
		},
		[setResult]
	);

	useEffect(() => {
		return () => {
			setResult(null);
		};
	}, [setResult]);

	return {
		...result,
		fetch,
		errorFeedback: result?.error && <StandardModal head={result.error.name} />,
		successFeedback: <SuccessSnackbar message="회원가입이 완료되었습니다!" open />,
		loadingFeedback: result?.loading && <SimpleBackdrop open />,
	};
};
export default useSignUp;
