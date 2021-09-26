import { BlockCreateDto } from '../dto/block.create.dto';
import { BlockRemoveDto } from '../dto/block.remove.dto';
import { BlockMoveDto } from '../dto/block.move.dto';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { EdgeCreateDto } from '../dto/edge.create.dto';
import { EdgeRemoveDto } from '../dto/edge.remove.dto';
import { UserRemoveRequestDto } from '../dto/user.remove.request.dto';
import { EdgeUpdateDto } from '../dto/edge.update.dto';
import { BlockConfigChangeDto } from '../dto/block.config.change.dto';
import { BlockLabelChangeDto } from '../dto/block.label.change.dto';
import { ProjectConfigChangeDto } from '../dto/project.config.change.dto';
import { ProjectEarlyStopConfigChangeDto } from '../dto/project.earlystopconfig.change.dto';
import { ProjectLearningRateReductionChangeDto } from '../dto/project.learningratereduction.change.dto';

export interface SocketService {
	createBlock: (data: BlockCreateDto) => void;
	changeBlockConfig: (data: BlockConfigChangeDto) => void;
	changeBlockLabel: (data: BlockLabelChangeDto) => void;
	removeBlock: (data: BlockRemoveDto) => void;
	moveBlock: (data: BlockMoveDto) => void;
	moveCursor: (data: CursorMoveDto) => void;
	createEdge: (data: EdgeCreateDto) => void;
	updateEdge: (data: EdgeUpdateDto) => void;
	removeEdge: (data: EdgeRemoveDto) => void;
	removeUser: (data: UserRemoveRequestDto) => void;
	disconnect: () => void;
	changeProjectConfig: (data: ProjectConfigChangeDto) => void;
	changeProjectEarlyStopConfig: (data: ProjectEarlyStopConfigChangeDto) => void;
	changeLearningRateReduction: (data: ProjectLearningRateReductionChangeDto) => void;
}
