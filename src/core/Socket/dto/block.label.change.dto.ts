import { SocketEvent } from '../SocketEvent';

export class BlockLabelChangeDto {
	message = SocketEvent.ChangeBlockLabel;

	blockId: undefined | string;

	data: undefined | string;
}
