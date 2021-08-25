import { io, Socket } from 'socket.io-client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import assert from 'assert';
import { XYPosition } from 'react-flow-renderer';
import { sleep } from '../util';
import useAuthentication from './useAuthentication';
import config from '../config';
import useProjectShareLocation from './useProjectShareLocation';
import {
	ChangeCurrentUserResponse,
	ChangeNodeBaseData,
	ChangeNodeRequestData,
	ChangeNodeResponseData,
	CreateEdgeBaseData,
	CreateEdgeRequestData,
	CreateEdgeResponseData,
	CreateElementBaseData,
	CreateElementRequestData,
	CreateElementResponseData,
	ExitCursorResponseData,
	InitDataRequest,
	InitDataResponse,
	JoinRequestData,
	JoinResponseData,
	LoginRequestData,
	LoginResponseData,
	MoveBlockBaseData,
	MoveBlockRequestData,
	MoveBlockResponseData,
	MoveCursorBasicData,
	MoveCursorEventData,
	MoveCursorResponseData,
	RemoveElementBaseData,
	RemoveElementRequestData,
	RemoveElementResponseData,
	SocketEvent,
} from '../core/Socket/SocketEvent';
import { UserProfile } from '../API/User/types';
import useProject from './useProject';
import { IProjectDto } from '../API/project/types';

type SocketProjectResult = null | IProjectDto;

export const socketProjectResultState = atom<SocketProjectResult>({
	key: 'socketProjectResultState',
	default: null,
});

type CursorResponseResult = Map<string, XYPosition>;

export const cursorResponseResultState = atom<CursorResponseResult>({
	key: 'cursorResponseResultState',
	default: new Map<string, XYPosition>(),
});

type MoveBlockResponseResult = MoveBlockBaseData | null;

export const moveBlockResponseResultState = atom<MoveBlockResponseResult>({
	key: 'moveBlockResponseResultState',
	default: null,
});

type CreateElementResponseResult = CreateElementBaseData | null;
type RemoveElementResponseResult = RemoveElementBaseData | null;

export const createBlockResponseResultState = atom<CreateElementResponseResult>({
	key: 'createBlockResponseResultState',
	default: null,
});

export const removeBlockResponseResultState = atom<RemoveElementResponseResult>({
	key: 'removeBlockResponseResultState',
	default: null,
});

type CreateEdgeResponseResult = CreateEdgeBaseData | null;

export const createEdgeResponseResultState = atom<CreateEdgeResponseResult>({
	key: 'createEdgeResponseResult',
	default: null,
});

type ChangeNodeResponseResult = ChangeNodeBaseData | null;

export const changeNodeResponseResultState = atom<ChangeNodeResponseResult>({
	key: 'changeNodeResponseResultState',
	default: null,
});
const useConnectSocket = () => {
	const socketRef = useRef<Socket | null>(null);
	const [, forceUpdate] = useState({});
	const [socketProjectResult, setSocketProjectResult] = useRecoilState<SocketProjectResult>(socketProjectResultState);
	const [cursorResponseResult, setCursorResponseResult] =
		useRecoilState<CursorResponseResult>(cursorResponseResultState);
	const [moveBlock, setMoveBlockResponseResult] = useRecoilState<MoveBlockResponseResult>(moveBlockResponseResultState);
	const [createBlock, setCreateBlock] = useRecoilState<CreateElementResponseResult>(createBlockResponseResultState);
	const [removeBlock, setRemoveBlock] = useRecoilState<RemoveElementResponseResult>(removeBlockResponseResultState);
	const [createdRemoteEdge, setCreatedEdge] = useRecoilState<CreateEdgeResponseResult>(createEdgeResponseResultState);
	const [changedRemoteNode, setChangeRemoteNode] =
		useRecoilState<ChangeNodeResponseResult>(changeNodeResponseResultState);
	const { roomNo } = useProjectShareLocation();
	const projectResult = useProject();
	const { user } = useAuthentication();

	const join = useCallback(() => {
		const joinRequestData: JoinRequestData = {
			roomNo,
		};
		socketRef.current?.emit(SocketEvent.JoinRequest, joinRequestData);
	}, [roomNo]);

	const login = useCallback(() => {
		const loginRequestData: LoginRequestData = {
			user: user?.profile as UserProfile,
		};
		socketRef.current?.emit(SocketEvent.LoginRequest, loginRequestData);

		join();
	}, [join, user?.profile]);

	const disconnect = useCallback(() => {
		socketRef.current?.disconnect();
	}, [socketRef]);

	const onMoveCursor = useCallback(
		(moveCursorEventData: MoveCursorBasicData) => {
			const data: MoveCursorEventData = {
				...moveCursorEventData,
				roomNo,
			};
			socketRef.current?.emit(SocketEvent.MoveCursorRequest, data);
		},
		[roomNo, socketRef]
	);

	const onMoveBlock = useCallback(
		(moveBlockData: MoveBlockBaseData) => {
			const data: MoveBlockRequestData = {
				roomNo,
				...moveBlockData,
			};

			socketRef.current?.emit(SocketEvent.MoveBlockRequest, data);
		},
		[roomNo]
	);

	const onCreateElement = useCallback(
		(createElement: CreateElementBaseData) => {
			const data: CreateElementRequestData = {
				...createElement,
				roomNo,
			};
			socketRef.current?.emit(SocketEvent.CreateElementRequest, data);
		},
		[roomNo]
	);

	const onCreateEdge = useCallback(
		(createEdge: CreateEdgeBaseData) => {
			const data: CreateEdgeRequestData = {
				...createEdge,
				roomNo,
			};
			socketRef.current?.emit(SocketEvent.CreateEdgeRequest, data);
		},
		[roomNo]
	);

	const onRemoveElement = useCallback(
		(removeElement: RemoveElementBaseData) => {
			const data: RemoveElementRequestData = {
				...removeElement,
				roomNo,
			};
			socketRef.current?.emit(SocketEvent.RemoveElementRequest, data);
		},
		[roomNo]
	);

	const onChangeNode = useCallback(
		(changedNode: ChangeNodeBaseData) => {
			const data: ChangeNodeRequestData = {
				...changedNode,
				roomNo,
			};
			socketRef.current?.emit(SocketEvent.ChangeBlockResponse, data);
		},
		[roomNo]
	);

	useEffect(() => {
		sleep(1000).then(() => {
			if (socketRef.current == null && (projectResult.data || projectResult.error)) {
				socketRef.current = io(`${config.SOCKET_SERVER_PREFIX}`);

				socketRef.current?.on('connect', () => {
					console.log('Connecting Success!!!');
					forceUpdate({});
				});

				socketRef.current?.on(SocketEvent.LoginResponse, (data: LoginResponseData) => {
					console.log(`login `, data);
				});

				socketRef.current?.on(SocketEvent.JoinResponse, (data: JoinResponseData) => {
					console.log(`join `, data);
					const { project } = data;
					setSocketProjectResult(project);
					if (project == null) {
						if (projectResult.data == null) throw new Error('잘못된 접근입니다.');
						const initDataRequestData: InitDataRequest = {
							roomNo,
							project: projectResult.data,
						};
						socketRef.current?.emit(SocketEvent.InitDataRequest, initDataRequestData);
					}
				});

				socketRef.current?.on(SocketEvent.InitDataResponse, (data: InitDataResponse) => {
					setSocketProjectResult(data.project);
					console.log(`init data `, data);
				});

				socketRef.current?.on(SocketEvent.ChangeCurrentUserResponse, (data: ChangeCurrentUserResponse) => {
					console.log('changeCurrentUser : ', data);
				});

				socketRef.current?.on(SocketEvent.MoveCursorResponse, (data: MoveCursorResponseData) => {
					const { userName, position } = data;
					setCursorResponseResult(new Map(cursorResponseResult.set(userName, position)));
				});

				socketRef.current?.on(SocketEvent.ExitCursorResponse, (data: ExitCursorResponseData) => {
					const { userName } = data;
					cursorResponseResult.delete(userName);
					setCursorResponseResult(new Map(cursorResponseResult));
				});

				socketRef.current?.on(SocketEvent.MoveBlockResponse, (data: MoveBlockResponseData) => {
					setMoveBlockResponseResult(data);
				});

				socketRef.current?.on(SocketEvent.CreateElementResponse, (data: CreateElementResponseData) => {
					setCreateBlock(data);
				});

				socketRef.current?.on(SocketEvent.CreateEdgeResponse, (data: CreateEdgeResponseData) => {
					setCreatedEdge(data);
				});

				socketRef.current?.on(SocketEvent.RemoveElementResponse, (data: RemoveElementResponseData) => {
					setRemoveBlock(data);
				});

				socketRef.current?.on(SocketEvent.ChangeBlockResponse, (data: ChangeNodeResponseData) => {
					console.log('Change', data);
					setChangeRemoteNode(data);
				});

				socketRef.current?.on('disconnect', () => {
					console.log('disconnect');
				});

				socketRef.current?.on('error', () => {
					console.log('error');
				});
			}
		});
	}, [
		cursorResponseResult,
		projectResult.data,
		projectResult.error,
		roomNo,
		setChangeRemoteNode,
		setCreateBlock,
		setCreatedEdge,
		setCursorResponseResult,
		setMoveBlockResponseResult,
		setRemoveBlock,
		setSocketProjectResult,
		user,
	]);

	return {
		connected: socketRef.current?.connected,
		login,
		disconnect,
		onMoveCursor,
		onMoveBlock,
		onCreateElement,
		onRemoveElement,
		onChangeNode,
		onCreateEdge,
		moveBlock,
		createBlock,
		createdRemoteEdge,
		removeBlock,
		changedRemoteNode,
		project: socketProjectResult,
	};
};

export default useConnectSocket;
