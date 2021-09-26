import { User } from '../entities/User';
import { SocketEvent } from '../SocketEvent';

export class UserListResponseDto {
	users: User[] | undefined;

	message = SocketEvent.UserListResponse;
}
