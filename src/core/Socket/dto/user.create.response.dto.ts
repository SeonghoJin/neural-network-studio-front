import { SocketEvent } from '../SocketEvent';

export class UserCreateResponseDto {
	project: any | undefined;

	message = SocketEvent.CreateUserResponse;
}
