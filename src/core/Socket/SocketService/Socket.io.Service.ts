import { Socket } from 'socket.io-client';
import { SocketService } from './SocketService';
import { BlockChangeDto } from '../dto/block.change.dto';
import { BlockCreateDto } from '../dto/block.create.dto';
import { EdgeCreateDto } from '../dto/edge.create.dto';
import { BlockMoveDto } from '../dto/block.move.dto';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { BlockRemoveDto } from '../dto/block.remove.dto';
import { EdgeRemoveDto } from '../dto/edge.remove.dto';
import { UserRemoveRequestDto } from '../dto/user.remove.request.dto';
import { SocketEvent } from '../SocketEvent';

export class SocketIoService implements SocketService {
	private socket: Socket;

	constructor(socket: Socket) {
		this.socket = socket;
	}

	changeBlock(data: BlockChangeDto): void {
		this.socket.emit(SocketEvent.ChangeBlock, data);
	}

	createBlock(data: BlockCreateDto): void {
		this.socket.emit(SocketEvent.CreateBlock, data);
	}

	createEdge(data: EdgeCreateDto): void {
		this.socket.emit(SocketEvent.CreateEdge, data);
	}

	moveBlock(data: BlockMoveDto): void {
		this.socket.emit(SocketEvent.MoveBlock, data);
	}

	moveCursor(data: CursorMoveDto): void {
		this.socket.emit(SocketEvent.MoveCursor, data);
	}

	removeBlock(data: BlockRemoveDto): void {
		this.socket.emit(SocketEvent.RemoveBlock, data);
	}

	removeEdge(data: EdgeRemoveDto): void {
		this.socket.emit(SocketEvent.RemoveEdge, data);
	}

	removeUser(data: UserRemoveRequestDto): void {
		this.socket.emit(SocketEvent.RemoveUserRequest, data);
	}
}
