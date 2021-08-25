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
	CreateEdgeRequest = 'create_edge_request',
	CreateEdgeResponse = 'create_edge_response',
	CreateElementRequest = 'create_block_request',
	CreateElementResponse = 'create_block_response',
	RemoveElementRequest = 'remove_block_request',
	RemoveElementResponse = 'remove_block_response',
	ErrorResponse = 'error_response',
	LeaveRequest = 'leave_response',
	LeaveResponse = 'leave_response',
	BeforeDisconnect = 'before_disconnect',
	DisconnectResponse = 'disconnect_response',
}

export interface RoomData {
	roomNo: string;
}

export type ChangeNodeRequestData = ChangeNodeBaseData & RoomData;

export type ChangeNodeResponseData = ChangeNodeBaseData;

export interface ChangeNodeBaseData {
	block: any;
}

export type CreateEdgeRequestData = CreateEdgeBaseData & RoomData;

export type CreateEdgeResponseData = CreateEdgeBaseData;

export interface CreateEdgeBaseData {
	edge: any;
}

export type RemoveElementRequestData = RemoveElementBaseData & RoomData;

export type RemoveElementResponseData = RemoveElementBaseData;

export interface RemoveElementBaseData {
	elements: any;
}

export type CreateElementRequestData = CreateElementBaseData & RoomData;

export type CreateElementResponseData = CreateElementBaseData;

export interface CreateElementBaseData {
	element: any;
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
