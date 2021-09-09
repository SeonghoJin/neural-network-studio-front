import { SocketEvent } from '../SocketEvent';

export class ProjectEarlyStopConfigChangeDto {
	message = SocketEvent.ChangeProjectEarlyStopConfig;

	name: string | undefined;

	value: string | undefined;
}
