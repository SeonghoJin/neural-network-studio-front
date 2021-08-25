import { SocketEvent } from '../SocketEvent';

export class BlockRemoveDto {
	blockId: string | undefined;

	message = SocketEvent.RemoveBlock;
}
