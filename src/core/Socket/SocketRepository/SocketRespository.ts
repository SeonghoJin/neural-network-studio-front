import { UserCreateResponseDto } from '../dto/user.create.response.dto';
import { UserListResponseDto } from '../dto/userList.response.dto';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { BlockCreateDto } from '../dto/block.create.dto';
import { BlockMoveDto } from '../dto/block.move.dto';
import { BlockChangeDto } from '../dto/block.change.dto';
import { BlockRemoveDto } from '../dto/block.remove.dto';
import { EdgeCreateDto } from '../dto/edge.create.dto';
import { EdgeRemoveDto } from '../dto/edge.remove.dto';

export interface SocketRepository {
	createdUserResponse: (event: string, cf: (data: UserCreateResponseDto) => void) => void;
	renewUserListResponse: (event: string, cf: (data: UserListResponseDto) => void) => void;
	moveCursor: (event: string, cf: (data: CursorMoveDto) => void) => void;
	createBlock: (event: string, cf: (data: BlockCreateDto) => void) => void;
	moveBlock: (event: string, cf: (data: BlockMoveDto) => void) => void;
	changeBlock: (event: string, cf: (data: BlockChangeDto) => void) => void;
	removeBlock: (event: string, cf: (data: BlockRemoveDto) => void) => void;
	createEdge: (event: string, cf: (data: EdgeCreateDto) => void) => void;
	removeEdge: (event: string, cf: (data: EdgeRemoveDto) => void) => void;
}
