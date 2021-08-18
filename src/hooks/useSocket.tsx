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
	ExitCursorResponseData,
	InitDataRequest,
	InitDataResponse,
	JoinRequestData,
	JoinResponseData,
	LoginRequestData,
	LoginResponseData,
	MoveCursorBasicData,
	MoveCursorEventData,
	MoveCursorResponseData,
	SocketEvent,
} from '../core/Project/share/SocketEvent';
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

const useConnectSocket = () => {
	const socketRef = useRef<Socket | null>(null);
	const [, forceUpdate] = useState({});
	const [socketProjectResult, setSocketProjectResult] = useRecoilState(socketProjectResultState);
	const [cursorResponseResult, setCursorResponseResult] = useRecoilState(cursorResponseResultState);
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

	const onMoveBlock = useCallback((data) => {
		socketRef.current?.emit(SocketEvent.MoveBlockRequest, data);
	}, []);

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
		setCursorResponseResult,
		setSocketProjectResult,
		user,
	]);

	return {
		connected: socketRef.current?.connected,
		login,
		disconnect,
		onMoveCursor,
		onMoveBlock,
		project: socketProjectResult,
	};
};

export default useConnectSocket;
