import { Cursor } from '../entities/Cursor';
import { SocketEvent } from '../SocketEvent';

export class CursorMoveDto {
	cursor: Cursor | undefined;

	message = SocketEvent.MoveCursor;
}
