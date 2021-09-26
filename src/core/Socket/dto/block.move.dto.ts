import { XYPosition } from 'react-flow-nns';
import { SocketEvent } from '../SocketEvent';

export class BlockMoveDto {
	blockId: string | undefined;

	position: XYPosition | undefined;

	message = SocketEvent.MoveBlock;
}
