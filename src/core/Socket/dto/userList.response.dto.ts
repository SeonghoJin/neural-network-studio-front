import { User } from '../entities/User';

export class UserListResponseDto {
	users: User[] | undefined;
}
