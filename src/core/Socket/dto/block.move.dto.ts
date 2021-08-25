import { XYPosition } from 'react-flow-renderer';
import { SocketEvent } from '../SocketEvent';

export class BlockMoveDto {
	blockId: string | undefined;

	position: XYPosition | undefined;

	message = SocketEvent.MoveBlock;
}
