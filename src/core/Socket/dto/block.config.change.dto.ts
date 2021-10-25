import { SocketEvent } from '../SocketEvent';

export class BlockConfigChangeDto {
	message = SocketEvent.ChangeBlockConfig;

	blockId: undefined | string;

	param:
		| {
				name: string;
				value: string;
		  }
		| undefined;
}
