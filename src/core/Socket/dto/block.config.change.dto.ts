import { SocketEvent } from '../SocketEvent';

export class BlockConfigChangeDto {
	message = SocketEvent.ChangeBlockConfig;

	blockId: undefined | string;

	config:
		| {
				name: string;
				value: undefined;
		  }
		| undefined;
}
