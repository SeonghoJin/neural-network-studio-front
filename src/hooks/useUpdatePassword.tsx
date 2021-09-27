import { atom, useRecoilState } from 'recoil';
import { useCallback } from 'react';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { updateProjectInfo } from '../API/project';
import { IProjectInfo } from '../API/project/types';
import { sleep } from '../util';
import { StaticPath } from '../components/PagePathConsts';
import useLogout from './useLogout';
import { updateUserPassword } from '../API/User';

type UpdatePasswordState = {
	error: null | AxiosError;
	loading: boolean;
	data: boolean | null;
} | null;

const updatePasswordResult = atom<UpdatePasswordState>({
	key: 'updateProjectInfoResult',
	default: null,
});

const useUpdatePassword = () => {
	const [result, setResult] = useRecoilState(updatePasswordResult);
	const { enqueueSnackbar } = useSnackbar();
	const logout = useLogout();
	const history = useHistory();
	const fetch = useCallback(
		async (password: string) => {
			setResult({
				data: null,
				error: null,
				loading: true,
			});

			try {
				const delayedData = await sleep(500).then(async () => {
					const data = await updateUserPassword(password);
					setResult({
						data: data || true,
						error: null,
						loading: false,
					});
					await logout.fetch();
					enqueueSnackbar('비밀번호가 수정되었습니다. 다시 로그인해주세요.', { variant: 'success' });
					history.push(StaticPath.MAIN);
					return true;
				});
				return delayedData;
			} catch (e: AxiosError | any) {
				setResult({
					data: null,
					loading: false,
					error: e,
				});
				enqueueSnackbar(e.message, { variant: 'error' });
				return null;
			}
		},
		[enqueueSnackbar, history, logout, setResult]
	);

	return {
		...result,
		loading: result?.loading,
		fetch,
	};
};

export default useUpdatePassword;
