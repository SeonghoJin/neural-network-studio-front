import { useCallback, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import StandardModal from '../components/utils/modal/StandardModal';
import { login, logout } from '../API/Auth';
import { LoginParams } from '../API/Auth/types';

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
	}, [setResult]);
	return {
		fetch,
		...result,
		errorModal: <StandardModal head="error" body="잘못된 로그아웃입니다." />,
	};
};

export default useLogout;
