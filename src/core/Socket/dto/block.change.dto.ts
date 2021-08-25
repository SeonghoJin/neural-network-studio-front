import { BlockState } from '../../reactFlow/block';
import { SocketEvent } from '../SocketEvent';

export class BlockChangeDto {
	blockId: string | undefined;

	blockState: BlockState | any | undefined;

	message = SocketEvent.ChangeBlock;
}
