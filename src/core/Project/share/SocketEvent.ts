import { XYPosition } from 'react-flow-renderer';
import { UserProfile } from '../../../API/User/types';
import { IProjectDto } from '../../../API/project/types';

export enum SocketEvent {
	ConnectResponse = 'connect_response',
	LoginRequest = 'login_request',
	LoginResponse = 'login_response',
	JoinRequest = 'join_request',
	JoinResponse = 'join_response',
	InitDataRequest = 'init_data_request',
	InitDataResponse = 'init_data_response',
	ChangeCurrentUserResponse = 'change_current_user_response',
	MoveCursorRequest = 'move_cursor_request',
	MoveCursorResponse = 'move_cursor_response',
	ExitCursorResponse = 'exit_cursor_response',
	MoveBlockRequest = 'move_block_request',
	MoveBlockResponse = 'move_block_response',
	ChangeBlockRequest = 'change_block_request',
	ChangeBlockResponse = 'change_block_request',
	CreateBlockRequest = 'create_block_request',
	CreateBlockResponse = 'create_block_response',
	ErrorResponse = 'error_response',
	LeaveRequest = 'leave_response',
	LeaveResponse = 'leave_response',
	BeforeDisconnect = 'before_disconnect',
	DisconnectResponse = 'disconnect_response',
}

export interface RoomData {
	roomNo: string;
}

export type MoveBlockRequestData = RoomData & MoveBlockBaseData;

export type MoveBlockResponseData = MoveBlockBaseData;

export interface MoveBlockBaseData {
	blockId: string;
	position: XYPosition;
}

export type ExitCursorResponseData = {
	userName: string;
};

export type MoveCursorResponseData = {
	userName: string;
	position: XYPosition;
};

export interface MoveCursorBasicData {
	position: XYPosition;
}

export interface MoveCursorEventData extends MoveCursorBasicData {
	roomNo: string;
}

export type ChangeCurrentUserResponse = {
	users: UserProfile[];
};

export type InitDataResponse = {
	project: IProjectDto;
};

export type InitDataRequest = {
	roomNo: string;
	project: IProjectDto;
};

export type ConnectResponseData = string;
export type DisconnectResponseData = string;
export type JoinRequestData = {
	roomNo: string;
};
export type JoinResponseData = {
	project: null | IProjectDto;
};
export type LoginRequestData = {
	user: UserProfile;
};
export type LoginResponseData = {
	user: UserProfile;
	socketId: string;
};
