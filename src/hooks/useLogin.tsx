import { useCallback, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import StandardModal from '../components/utils/modal/StandardModal';
import { login } from '../API/Auth';
import { LoginParams } from '../API/Auth/types';
import SimpleBackdrop from '../components/utils/BackLoading';

export const loginRequestResult = atom({
	key: 'loginRequestResult',
	default: {
		error: null,
		data: null,
		loading: false,
	},
});

export const useLogin = () => {
	const [result, setResult] = useRecoilState(loginRequestResult);

	const fetch = useCallback(
		async (param: LoginParams) => {
			setResult({
				error: null,
				data: null,
				loading: true,
			});
			try {
				const response = await login(param);
				setResult((state) => ({
					loading: false,
					error: null,
					data: response.data,
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
		},

		[setResult]
	);

	return {
		fetch,
		...result,
		errorFeedback: result.error && (
			<StandardModal
				head="아이디 혹은 비밀번호가 잘못되었습니다. 다시 로그인해주십시요."
				onClose={() => {
					setResult({
						data: null,
						loading: false,
						error: null,
					});
				}}
			/>
		),
		loadingFeedback: result.loading && <SimpleBackdrop open={result.loading} />,
	};
};

export default useLogin;
