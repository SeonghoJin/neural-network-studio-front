import { User } from '../entities/User';
import { SocketEvent } from '../SocketEvent';

export class UserRemoveRequestDto {
	user: User | undefined;

	message = SocketEvent.RemoveUserRequest;
}
