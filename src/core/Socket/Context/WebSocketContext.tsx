import React, { useEffect, useState } from 'react';
import useProjectShareLocation from '../../../hooks/useProjectShareLocation';
import config from '../../../config';
import { useSocketDispatch, useSocketState } from './SocketContext';
import { WebSocketRepository } from '../SocketRepository/WebSocketRepository';
import { WebSocketService } from '../SocketService/WebSocketService';
import { useRemoteCursorMove } from '../hooks/useRemoteCursorMove';
import { useRemoteEdgeCreate } from '../hooks/useRemoteEdgeCreate';
import { useRemoteEdgeRemove } from '../hooks/useRemoteEdgeRemove';
import { useRemoteBlockRemove } from '../hooks/useRemoteBlockRemove';
import { useRemoteBlockCreate } from '../hooks/useRemoteBlockCreate';
import { useRemoteBlockMove } from '../hooks/useRemoteBlockMove';
import { useRemoteBlockConfigChange } from '../hooks/useRemoteBlockConfigChange';
import { useRemoteBlockLabelChange } from '../hooks/useRemoteBlockLabelChange';
import { useRemoteEdgeUpdate } from '../hooks/useRemoteEdgeUpdate';
import { useUserList } from '../hooks/useUserListResponse';
import { useCreateUserResponse } from '../hooks/useCreateUserResponse';
import { useRemoteProjectConfigChange } from '../hooks/useProjectConfigChange';
import { useRemoteProjectLearningRateReductionConfigChange } from '../hooks/useProjectLearningRateReductionChange';
import { useRemoteProjectEarlyStopConfigChange } from '../hooks/useProjectEarlyStopConfigChange';
import { SocketEvent } from '../SocketEvent';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { UserCreateResponseDto } from '../dto/user.create.response.dto';
import { UserListResponseDto } from '../dto/userList.response.dto';
import { BlockCreateDto } from '../dto/block.create.dto';
import { BlockMoveDto } from '../dto/block.move.dto';
import { BlockRemoveDto } from '../dto/block.remove.dto';
import { EdgeCreateDto } from '../dto/edge.create.dto';
import { EdgeRemoveDto } from '../dto/edge.remove.dto';
import { ProjectConfigChangeDto } from '../dto/project.config.change.dto';
import { ProjectEarlyStopConfigChangeDto } from '../dto/project.earlystopconfig.change.dto';
import { ProjectLearningRateReductionChangeDto } from '../dto/project.learningratereduction.change.dto';
import { useMessageResult } from '../hooks/useSendMessage';

export const WebSocketContext = ({ children }: { children: React.ReactNode }) => {
	const dispatch = useSocketDispatch();
	const location = useProjectShareLocation();
	const socketState = useSocketState();
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
	const { setMessageDto } = useMessageResult();

	useEffect(() => {
		if (socketState.socketRepository === null || socketState.socketService === null) {
			const socket = new WebSocket(`${config.SOCKET_SERVER_PREFIX}/ws/${location.roomNo}`);
			const socketRepository = new WebSocketRepository(socket);
			socketRepository?.initSocketRepository(() => {
				socketRepository?.moveCursor(SocketEvent.MoveCursor, (data: CursorMoveDto) => {
					setRemoteCursorMove(data);
				});
				socketRepository?.createdUserResponse(SocketEvent.CreateUserResponse, (data: UserCreateResponseDto) => {
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
				socketRepository?.sentMessage(SocketEvent.SendMessage, (data) => {
					setMessageDto(data);
				});
			});
			socket.onopen = () => {
				const values = {
					socketRepository,
					socketService: new WebSocketService(socket),
				};
				dispatch({
					payload: values,
				});
			};
			socket.onerror = (e) => {
				console.log(e);
			};
			socket.onclose = (e) => {
				console.log(e);
			};
		}
	}, [
		dispatch,
		location.roomNo,
		setChangeProjectConfig,
		setChangeProjectEarlyStopConfig,
		setChangeProjectLearningRateReductionConfig,
		setCreateUserResponse,
		setMessageDto,
		setRemoteBlockConfigChange,
		setRemoteBlockCreate,
		setRemoteBlockLabelChange,
		setRemoteBlockMove,
		setRemoteBlockRemove,
		setRemoteCursorMove,
		setRemoteEdgeCreate,
		setRemoteEdgeRemove,
		setRemoteEdgeUpdate,
		setUserList,
		socketState.socketRepository,
		socketState.socketService,
	]);

	useEffect(() => {
		return () => {
			socketState.socketService?.disconnect();
			socketState.socketService = null;
			socketState.socketRepository = null;
		};
	}, [socketState, socketState.socketService]);
	return <>{children}</>;
};
