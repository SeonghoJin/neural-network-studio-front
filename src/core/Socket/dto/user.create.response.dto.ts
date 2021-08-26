import { SocketEvent } from '../SocketEvent';
import { IProjectContentDto, IProjectDto } from '../../../API/project/types';
import { User } from '../entities/User';

export class UserCreateResponseDto {
	project: IProjectContentDto | undefined;

	user: User | undefined;

	message = SocketEvent.CreateUserResponse;
}
