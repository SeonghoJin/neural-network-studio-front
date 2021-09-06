import { SocketEvent } from '../SocketEvent';

export class ProjectChangeDto {
	message = SocketEvent.ChangeProjectConfig;

	name: string | undefined;

	value: string | undefined;
}
