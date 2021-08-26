import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SocketContext } from '../Context/SocketContext';
import { SocketEvent } from '../SocketEvent';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { useRemoteCursorMove } from './useRemoteCursorMove';
import { UserCreateResponseDto } from '../dto/user.create.response.dto';
import { useRemoteEdgeCreate } from './useRemoteEdgeCreate';
import { useRemoteEdgeRemove } from './useRemoteEdgeRemove';
import { useRemoteBlockChange } from './useRemoteBlockChange';
import { useRemoteBlockRemove } from './useRemoteBlockRemove';
import { useRemoteBlockCreate } from './useRemoteBlockCreate';
import { useRemoteBlockMove } from './useRemoteBlockMove';
import { useUserList } from './useUserListResponse';
import { useCreateUserResponse } from './useCreateUserResponse';
import { EdgeCreateDto } from '../dto/edge.create.dto';
import { EdgeRemoveDto } from '../dto/edge.remove.dto';
import { UserListResponseDto } from '../dto/userList.response.dto';
import { BlockCreateDto } from '../dto/block.create.dto';
import { BlockChangeDto } from '../dto/block.change.dto';
import { BlockMoveDto } from '../dto/block.move.dto';
import { BlockRemoveDto } from '../dto/block.remove.dto';

export const useSocket = () => {
	const { socketService, socketRepository } = useContext(SocketContext);
	const { setRemoteCursorMove } = useRemoteCursorMove();
	const { setRemoteEdgeCreate } = useRemoteEdgeCreate();
	const { setRemoteEdgeRemove } = useRemoteEdgeRemove();
	const { setRemoteBlockChange } = useRemoteBlockChange();
	const { setRemoteBlockRemove } = useRemoteBlockRemove();
	const { setRemoteBlockCreate } = useRemoteBlockCreate();
	const { setRemoteBlockMove } = useRemoteBlockMove();
	const { setUserList } = useUserList();
	const { setCreateUserResponse } = useCreateUserResponse();

	useEffect(() => {
		socketRepository?.moveCursor(SocketEvent.MoveCursor, (data: CursorMoveDto) => {
			setRemoteCursorMove(data);
		});
		socketRepository?.createdUserResponse(SocketEvent.CreateUserResponse, (data: UserCreateResponseDto) => {
			console.log(data);
			setCreateUserResponse(data);
		});
		socketRepository?.renewUserListResponse(SocketEvent.UserListResponse, (data: UserListResponseDto) => {
			setUserList(data);
		});
		socketRepository?.createBlock(SocketEvent.CreateBlock, (data: BlockCreateDto) => {
			setRemoteBlockCreate(data);
		});
		socketRepository?.changeBlock(SocketEvent.ChangeBlock, (data: BlockChangeDto) => {
			setRemoteBlockChange(data);
		});
		socketRepository?.moveBlock(SocketEvent.MoveBlock, (data: BlockMoveDto) => {
			setRemoteBlockMove(data);
		});
		socketRepository?.removeBlock(SocketEvent.RemoveBlock, (data: BlockRemoveDto) => {
			setRemoteBlockRemove(data);
		});
		socketRepository?.createEdge(SocketEvent.CreateEdge, (data: EdgeCreateDto) => {
			setRemoteEdgeCreate(data);
		});
		socketRepository?.removeEdge(SocketEvent.RemoveEdge, (data: EdgeRemoveDto) => {
			setRemoteEdgeRemove(data);
		});
	}, [
		setCreateUserResponse,
		setRemoteBlockChange,
		setRemoteBlockCreate,
		setRemoteBlockMove,
		setRemoteBlockRemove,
		setRemoteCursorMove,
		setRemoteEdgeCreate,
		setRemoteEdgeRemove,
		setUserList,
		socketRepository,
	]);

	return {
		socketService,
	};
};
