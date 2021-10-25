import { SocketEvent } from '../SocketEvent';

export interface MessageDto {
	message: SocketEvent.SendMessage;
	chat: string;
	name: string;
}
