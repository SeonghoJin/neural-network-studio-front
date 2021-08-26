import { BlockCreateDto } from '../dto/block.create.dto';
import { BlockChangeDto } from '../dto/block.change.dto';
import { BlockRemoveDto } from '../dto/block.remove.dto';
import { BlockMoveDto } from '../dto/block.move.dto';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { EdgeCreateDto } from '../dto/edge.create.dto';
import { EdgeRemoveDto } from '../dto/edge.remove.dto';
import { UserRemoveRequestDto } from '../dto/user.remove.request.dto';

export interface SocketService {
	createBlock: (data: BlockCreateDto) => void;
	changeBlock: (data: BlockChangeDto) => void;
	removeBlock: (data: BlockRemoveDto) => void;
	moveBlock: (data: BlockMoveDto) => void;
	moveCursor: (data: CursorMoveDto) => void;
	createEdge: (data: EdgeCreateDto) => void;
	removeEdge: (data: EdgeRemoveDto) => void;
	removeUser: (data: UserRemoveRequestDto) => void;
	disconnect: () => void;
}
