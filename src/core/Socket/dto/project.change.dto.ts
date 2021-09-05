import { IProjectContentDto } from '../../../API/project/types';
import { User } from '../entities/User';
import { SocketEvent } from '../SocketEvent';

export class ProjectChangeDto {
	message = SocketEvent.ChangeProjectConfig;

	name: string | undefined;

	value: string | undefined;
}
