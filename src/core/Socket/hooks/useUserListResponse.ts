import { atom, useRecoilState } from 'recoil';
import { UserListResponseDto } from '../dto/userList.response.dto';

type UserListResponseResult = UserListResponseDto | null;

const userListResponseResult = atom<UserListResponseResult>({
	key: 'userListResponseResult',
	default: null,
});

export const useUserList = () => {
	const [userList, setUserList] = useRecoilState<UserListResponseResult>(userListResponseResult);

	return {
		userList,
		setUserList,
	};
};
