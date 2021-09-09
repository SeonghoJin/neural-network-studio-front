import { SocketEvent } from '../SocketEvent';

export class ProjectConfigChangeDto {
	message = SocketEvent.ChangeProjectConfig;

	name: string | undefined;

	value: string | undefined;
}
