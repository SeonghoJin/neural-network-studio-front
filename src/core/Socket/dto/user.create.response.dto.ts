import { SocketEvent } from '../SocketEvent';
import { IProjectDto } from '../../../API/project/types';
import { User } from '../entities/User';

export class UserCreateResponseDto {
	project: IProjectDto | undefined;

	user: User | undefined;

	message = SocketEvent.CreateUserResponse;
}
