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

export class WebSocketRepository implements SocketRepository {
	private socket: WebSocket;

	constructor(socket: WebSocket) {
		this.socket = socket;
	}

	createdUserResponse: (event: string, cf: (data: UserCreateResponseDto) => void) => void = (event, cf) => {
		this.socket.addEventListener('message', (msgevt: MessageEvent) => {
			if (msgevt.data.message === event) {
				cf(msgevt.data);
			}
		});
	};

	renewUserListResponse: (event: string, cf: (data: UserListResponseDto) => void) => void = (event, cf) => {
		this.socket.addEventListener('message', (msgevt: MessageEvent) => {
			if (msgevt.data.message === event) {
				cf(msgevt.data);
			}
		});
	};

	moveCursor: (event: string, cf: (data: CursorMoveDto) => void) => void = (event, cf) => {
		this.socket.addEventListener('message', (msgevt: MessageEvent) => {
			if (msgevt.data.message === event) {
				cf(msgevt.data);
			}
		});
	};

	createBlock: (event: string, cf: (data: BlockCreateDto) => void) => void = (event, cf) => {
		this.socket.addEventListener('message', (msgevt: MessageEvent) => {
			if (msgevt.data.message === event) {
				cf(msgevt.data);
			}
		});
	};

	moveBlock: (event: string, cf: (data: BlockMoveDto) => void) => void = (event, cf) => {
		this.socket.addEventListener('message', (msgevt: MessageEvent) => {
			if (msgevt.data.message === event) {
				cf(msgevt.data);
			}
		});
	};

	changeBlock: (event: string, cf: (data: BlockChangeDto) => void) => void = (event, cf) => {
		this.socket.addEventListener('message', (msgevt: MessageEvent) => {
			if (msgevt.data.message === event) {
				cf(msgevt.data);
			}
		});
	};

	removeBlock: (event: string, cf: (data: BlockRemoveDto) => void) => void = (event, cf) => {
		this.socket.addEventListener('message', (msgevt: MessageEvent) => {
			if (msgevt.data.message === event) {
				cf(msgevt.data);
			}
		});
	};

	createEdge: (event: string, cf: (data: EdgeCreateDto) => void) => void = (event, cf) => {
		this.socket.addEventListener('message', (msgevt: MessageEvent) => {
			if (msgevt.data.message === event) {
				cf(msgevt.data);
			}
		});
	};

	removeEdge: (event: string, cf: (data: EdgeRemoveDto) => void) => void = (event, cf) => {
		this.socket.addEventListener('message', (msgevt: MessageEvent) => {
			if (msgevt.data.message === event) {
				cf(msgevt.data);
			}
		});
	};
}
