import { SocketService } from './SocketService';
import { BlockCreateDto } from '../dto/block.create.dto';
import { EdgeCreateDto } from '../dto/edge.create.dto';
import { BlockMoveDto } from '../dto/block.move.dto';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { BlockRemoveDto } from '../dto/block.remove.dto';
import { EdgeRemoveDto } from '../dto/edge.remove.dto';
import { UserRemoveRequestDto } from '../dto/user.remove.request.dto';
import { BlockConfigChangeDto } from '../dto/block.config.change.dto';
import { BlockLabelChangeDto } from '../dto/block.label.change.dto';
import { EdgeUpdateDto } from '../dto/edge.update.dto';
import { ProjectLearningRateReductionChangeDto } from '../dto/project.learningratereduction.change.dto';
import { ProjectConfigChangeDto } from '../dto/project.config.change.dto';
import { ProjectEarlyStopConfigChangeDto } from '../dto/project.earlystopconfig.change.dto';
import { MessageDto } from '../dto/message.dto';

export class WebSocketService implements SocketService {
	private socket: WebSocket;

	constructor(socket: WebSocket) {
		this.socket = socket;
	}

	changeBlockConfig(data: BlockConfigChangeDto) {
		this.socket.send(JSON.stringify(data));
	}

	changeBlockLabel(data: BlockLabelChangeDto) {
		this.socket.send(JSON.stringify(data));
	}

	updateEdge(data: EdgeUpdateDto) {
		this.socket.send(JSON.stringify(data));
	}

	disconnect: () => void = () => {
		this.socket.close();
	};

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

	changeLearningRateReduction(data: ProjectLearningRateReductionChangeDto): void {
		this.socket.send(JSON.stringify(data));
	}

	changeProjectConfig(data: ProjectConfigChangeDto): void {
		this.socket.send(JSON.stringify(data));
	}

	changeProjectEarlyStopConfig(data: ProjectEarlyStopConfigChangeDto): void {
		this.socket.send(JSON.stringify(data));
	}

	sendMessage(data: MessageDto): void {
		this.socket.send(JSON.stringify(data));
	}
}
