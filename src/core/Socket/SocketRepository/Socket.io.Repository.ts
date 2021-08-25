import { Socket } from 'socket.io-client';
import { BlockChangeDto } from '../dto/block.change.dto';
import { BlockCreateDto } from '../dto/block.create.dto';
import { BlockMoveDto } from '../dto/block.move.dto';
import { BlockRemoveDto } from '../dto/block.remove.dto';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { EdgeCreateDto } from '../dto/edge.create.dto';
import { EdgeRemoveDto } from '../dto/edge.remove.dto';
import { UserCreateResponseDto } from '../dto/user.create.response.dto';
import { UserListResponseDto } from '../dto/userList.response.dto';
import { SocketRepository } from './SocketRespository';

export class SocketIoRepository implements SocketRepository {
	private socket: Socket;

	constructor(socket: Socket) {
		this.socket = socket;
	}

	createdUserResponse: (event: string, cf: (data: UserCreateResponseDto) => void) => void = (event, cf) => {
		this.socket.on(event, cf);
	};

	renewUserListResponse: (event: string, cf: (data: UserListResponseDto) => void) => void = (event, cf) => {
		this.socket.on(event, cf);
	};

	moveCursor: (event: string, cf: (data: CursorMoveDto) => void) => void = (event, cf) => {
		this.socket.on(event, cf);
	};

	createBlock: (event: string, cf: (data: BlockCreateDto) => void) => void = (event, cf) => {
		this.socket.on(event, cf);
	};

	moveBlock: (event: string, cf: (data: BlockMoveDto) => void) => void = (event, cf) => {
		this.socket.on(event, cf);
	};

	changeBlock: (event: string, cf: (data: BlockChangeDto) => void) => void = (event, cf) => this.socket.on(event, cf);

	removeBlock: (event: string, cf: (data: BlockRemoveDto) => void) => void = (event, cf) => this.socket.on(event, cf);

	createEdge: (event: string, cf: (data: EdgeCreateDto) => void) => void = (event, cf) => this.socket.on(event, cf);

	removeEdge: (event: string, cf: (data: EdgeRemoveDto) => void) => void = (event, cf) => this.socket.on(event, cf);
}
