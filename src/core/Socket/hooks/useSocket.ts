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

	return {
		socketService,
	};
};
