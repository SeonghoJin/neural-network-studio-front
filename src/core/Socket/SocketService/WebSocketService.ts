import { SocketService } from './SocketService';
import { BlockChangeDto } from '../dto/block.change.dto';
import { BlockCreateDto } from '../dto/block.create.dto';
import { EdgeCreateDto } from '../dto/edge.create.dto';
import { BlockMoveDto } from '../dto/block.move.dto';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { BlockRemoveDto } from '../dto/block.remove.dto';
import { EdgeRemoveDto } from '../dto/edge.remove.dto';
import { UserRemoveRequestDto } from '../dto/user.remove.request.dto';

export class WebSocketService implements SocketService {
	private socket: WebSocket;

	constructor(socket: WebSocket) {
		this.socket = socket;
	}

	disconnect: () => void = () => {
		this.socket.close();
	};

	changeBlock(data: BlockChangeDto): void {
		this.socket.send(JSON.stringify(data));
	}

	createBlock(data: BlockCreateDto): void {
		this.socket.send(JSON.stringify(data));
	}

	createEdge(data: EdgeCreateDto): void {
		this.socket.send(JSON.stringify(data));
	}

	moveBlock(data: BlockMoveDto): void {
		this.socket.send(JSON.stringify(data));
	}

	moveCursor(data: CursorMoveDto): void {
		this.socket.send(JSON.stringify(data));
	}

	removeBlock(data: BlockRemoveDto): void {
		this.socket.send(JSON.stringify(data));
	}

	removeEdge(data: EdgeRemoveDto): void {
		this.socket.send(JSON.stringify(data));
	}

	removeUser(data: UserRemoveRequestDto): void {
		this.socket.send(JSON.stringify(data));
	}
}
