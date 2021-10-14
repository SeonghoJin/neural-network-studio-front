import { Socket } from 'socket.io-client';
import { BlockConfigChangeDto } from '../dto/block.config.change.dto';
import { BlockCreateDto } from '../dto/block.create.dto';
import { BlockLabelChangeDto } from '../dto/block.label.change.dto';
import { BlockMoveDto } from '../dto/block.move.dto';
import { BlockRemoveDto } from '../dto/block.remove.dto';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { EdgeCreateDto } from '../dto/edge.create.dto';
import { EdgeRemoveDto } from '../dto/edge.remove.dto';
import { EdgeUpdateDto } from '../dto/edge.update.dto';
import { UserCreateResponseDto } from '../dto/user.create.response.dto';
import { UserListResponseDto } from '../dto/userList.response.dto';
import { SocketRepository } from './SocketRespository';
import { ProjectConfigChangeDto } from '../dto/project.config.change.dto';
import { ProjectEarlyStopConfigChangeDto } from '../dto/project.earlystopconfig.change.dto';
import { ProjectLearningRateReductionChangeDto } from '../dto/project.learningratereduction.change.dto';
import { MessageDto } from '../dto/message.dto';

export class SocketIoRepository implements SocketRepository {
	private socket: Socket;

	constructor(socket: Socket) {
		this.socket = socket;
	}

	changeBlockLabel: (event: string, cf: (data: BlockLabelChangeDto) => void) => void = (event, cf) => {
		this.socket.on(event, cf);
	};

	changeBlockConfig: (event: string, cf: (data: BlockConfigChangeDto) => void) => void = (event, cf) => {
		this.socket.on(event, cf);
	};

	updateEdge: (event: string, cf: (data: EdgeUpdateDto) => void) => void = (event, cf) => {
		this.socket.on(event, cf);
	};

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

	removeBlock: (event: string, cf: (data: BlockRemoveDto) => void) => void = (event, cf) => this.socket.on(event, cf);

	createEdge: (event: string, cf: (data: EdgeCreateDto) => void) => void = (event, cf) => this.socket.on(event, cf);

	removeEdge: (event: string, cf: (data: EdgeRemoveDto) => void) => void = (event, cf) => this.socket.on(event, cf);

	changeProjectConfig(event: string, cf: (data: ProjectConfigChangeDto) => void): void {}

	changeProjectEarlyStopConfig(event: string, cf: (data: ProjectEarlyStopConfigChangeDto) => void): void {}

	changeProjectLearningRateReductionChangeDto(
		event: string,
		cf: (data: ProjectLearningRateReductionChangeDto) => void
	): void {}

	initSocketRepository(cf: () => void): void {}

	sentMessage(event: string, cf: (data: MessageDto) => void): void {}
}
