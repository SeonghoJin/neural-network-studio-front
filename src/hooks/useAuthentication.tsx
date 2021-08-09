import { useSelector } from 'react-redux';

import { atom, useRecoilState } from 'recoil';
import { UserProfile } from '../API/User/types';

export enum UserType {
	Login = 'Login',
	Logout = 'Logout',
	SignUp = 'SignUp',
	Visitor = 'Visitor',
}

export type User = {
	type: UserType;
	profile: UserProfile | null;
} | null;

const Authentication = atom<User>({
	key: 'Authentication',
	default: null,
});

const useAuthentication = () => {
	const [user, setUser] = useRecoilState(Authentication);
	const isAuthentication = user?.type === UserType.Login;

	return {
		user,
		setUser,
		isAuthentication,
	};
};

export default useAuthentication;
