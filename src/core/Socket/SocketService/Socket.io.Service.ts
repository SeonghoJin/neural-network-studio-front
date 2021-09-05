import { Socket } from 'socket.io-client';
import { SocketService } from './SocketService';
import { BlockCreateDto } from '../dto/block.create.dto';
import { EdgeCreateDto } from '../dto/edge.create.dto';
import { BlockMoveDto } from '../dto/block.move.dto';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { BlockRemoveDto } from '../dto/block.remove.dto';
import { EdgeRemoveDto } from '../dto/edge.remove.dto';
import { UserRemoveRequestDto } from '../dto/user.remove.request.dto';
import { SocketEvent } from '../SocketEvent';
import { EdgeUpdateDto } from '../dto/edge.update.dto';
import { BlockLabelChangeDto } from '../dto/block.label.change.dto';
import { BlockConfigChangeDto } from '../dto/block.config.change.dto';

export class SocketIoService implements SocketService {
	socket: Socket | null = null;

	constructor(socket: Socket) {
		this.socket = socket;
	}

	createBlock(data: BlockCreateDto): void {
		this.socket?.emit(SocketEvent.CreateBlock, data);
	}

	createEdge(data: EdgeCreateDto): void {
		this.socket?.emit(SocketEvent.CreateEdge, data);
	}

	moveBlock(data: BlockMoveDto): void {
		this.socket?.emit(SocketEvent.MoveBlock, data);
	}

	moveCursor(data: CursorMoveDto): void {
		this.socket?.emit(SocketEvent.MoveCursor, data);
	}

	removeBlock(data: BlockRemoveDto): void {
		this.socket?.emit(SocketEvent.RemoveBlock, data);
	}

	removeEdge(data: EdgeRemoveDto): void {
		this.socket?.emit(SocketEvent.RemoveEdge, data);
	}

	removeUser(data: UserRemoveRequestDto): void {
		this.socket?.emit(SocketEvent.RemoveUserRequest, data);
	}

	disconnect(): void {
		this.socket?.disconnect();
	}

	changeBlockConfig(data: BlockConfigChangeDto): void {
		this.socket?.emit(SocketEvent.ChangeBlockConfig, data);
	}

	changeBlockLabel(data: BlockLabelChangeDto): void {
		this.socket?.emit(SocketEvent.ChangeBlockLabel, data);
	}

	updateEdge(data: EdgeUpdateDto): void {
		this.socket?.emit(SocketEvent.UpdateEdge, data);
	}
}
