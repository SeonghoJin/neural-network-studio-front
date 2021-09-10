import { useContext, useEffect } from 'react';
import { SocketContext, useSocketState } from '../Context/SocketContext';
import { SocketEvent } from '../SocketEvent';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { useRemoteCursorMove } from './useRemoteCursorMove';
import { UserCreateResponseDto } from '../dto/user.create.response.dto';
import { useRemoteEdgeCreate } from './useRemoteEdgeCreate';
import { useRemoteEdgeRemove } from './useRemoteEdgeRemove';
import { useRemoteBlockRemove } from './useRemoteBlockRemove';
import { useRemoteBlockCreate } from './useRemoteBlockCreate';
import { useRemoteBlockMove } from './useRemoteBlockMove';
import { useUserList } from './useUserListResponse';
import { useCreateUserResponse } from './useCreateUserResponse';
import { EdgeCreateDto } from '../dto/edge.create.dto';
import { EdgeRemoveDto } from '../dto/edge.remove.dto';
import { UserListResponseDto } from '../dto/userList.response.dto';
import { BlockCreateDto } from '../dto/block.create.dto';
import { BlockMoveDto } from '../dto/block.move.dto';
import { BlockRemoveDto } from '../dto/block.remove.dto';
import { useRemoteBlockConfigChange } from './useRemoteBlockConfigChange';
import { useRemoteBlockLabelChange } from './useRemoteBlockLabelChange';
import { useRemoteEdgeUpdate } from './useRemoteEdgeUpdate';
import { useRemoteProjectLearningRateReductionConfigChange } from './useProjectLearningRateReductionChange';
import { useRemoteProjectConfigChange } from './useProjectConfigChange';
import { useRemoteProjectEarlyStopConfigChange } from './useProjectEarlyStopConfigChange';
import { ProjectConfigChangeDto } from '../dto/project.config.change.dto';
import { ProjectEarlyStopConfigChangeDto } from '../dto/project.earlystopconfig.change.dto';
import { ProjectLearningRateReductionChangeDto } from '../dto/project.learningratereduction.change.dto';

export const useSocket = () => {
	const { socketService, socketRepository } = useSocketState();
	const { setRemoteCursorMove } = useRemoteCursorMove();
	const { setRemoteEdgeCreate } = useRemoteEdgeCreate();
	const { setRemoteEdgeRemove } = useRemoteEdgeRemove();
	const { setRemoteBlockRemove } = useRemoteBlockRemove();
	const { setRemoteBlockCreate } = useRemoteBlockCreate();
	const { setRemoteBlockMove } = useRemoteBlockMove();
	const { setRemoteBlockConfigChange } = useRemoteBlockConfigChange();
	const { setRemoteBlockLabelChange } = useRemoteBlockLabelChange();
	const { setRemoteEdgeUpdate } = useRemoteEdgeUpdate();
	const { setUserList } = useUserList();
	const { setCreateUserResponse } = useCreateUserResponse();
	const { setChangeProjectConfig } = useRemoteProjectConfigChange();
	const { setChangeProjectLearningRateReductionConfig } = useRemoteProjectLearningRateReductionConfigChange();
	const { setChangeProjectEarlyStopConfig } = useRemoteProjectEarlyStopConfigChange();
	useEffect(() => {
		socketRepository?.initSocketRepository(() => {
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
			socketRepository?.changeBlockConfig(SocketEvent.ChangeBlockConfig, (data) => {
				setRemoteBlockConfigChange(data);
			});
			socketRepository?.changeBlockLabel(SocketEvent.ChangeBlockLabel, (data) => {
				setRemoteBlockLabelChange(data);
			});
			socketRepository?.updateEdge(SocketEvent.UpdateEdge, (data) => {
				setRemoteEdgeUpdate(data);
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
			socketRepository?.changeProjectConfig(SocketEvent.ChangeProjectConfig, (data: ProjectConfigChangeDto) => {
				setChangeProjectConfig(data);
			});
			socketRepository?.changeProjectEarlyStopConfig(
				SocketEvent.ChangeProjectEarlyStopConfig,
				(data: ProjectEarlyStopConfigChangeDto) => {
					setChangeProjectEarlyStopConfig(data);
				}
			);
			socketRepository?.changeProjectLearningRateReductionChangeDto(
				SocketEvent.ChangeProjectLearningRateReductionConfig,
				(data: ProjectLearningRateReductionChangeDto) => {
					setChangeProjectLearningRateReductionConfig(data);
				}
			);
		});
	}, [
		setCreateUserResponse,
		setRemoteBlockCreate,
		setRemoteBlockMove,
		setRemoteBlockRemove,
		setRemoteCursorMove,
		setRemoteEdgeCreate,
		setRemoteEdgeRemove,
		setRemoteEdgeUpdate,
		setRemoteBlockLabelChange,
		setRemoteBlockConfigChange,
		setUserList,
		socketRepository,
		setChangeProjectConfig,
		setChangeProjectEarlyStopConfig,
		setChangeProjectLearningRateReductionConfig,
	]);

	return {
		socketService,
	};
};
