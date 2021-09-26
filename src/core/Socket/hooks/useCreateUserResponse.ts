import { atom, useRecoilState } from 'recoil';
import { UserCreateResponseDto } from '../dto/user.create.response.dto';

type CreateUserResponseResult = UserCreateResponseDto | null;

const createUserResponseResult = atom<CreateUserResponseResult>({
	key: 'createUserResponseResult',
	default: null,
});

export const useCreateUserResponse = () => {
	const [createdUserResponse, setCreateUserResponse] =
		useRecoilState<CreateUserResponseResult>(createUserResponseResult);

	return {
		createdUserResponse,
		setCreateUserResponse,
	};
};
