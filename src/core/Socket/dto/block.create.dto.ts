import { BlockState } from '../../reactFlow/block';
import { Node } from '../entities/Node';
import { SocketEvent } from '../SocketEvent';

export class BlockCreateDto {
	blockId: string | undefined;

	block: Node<BlockState> | any | undefined;

	message = SocketEvent.CreateBlock;
}
