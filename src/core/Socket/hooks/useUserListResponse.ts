import { atom, useRecoilState } from 'recoil';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { EdgeCreateDto } from '../dto/edge.create.dto';
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
