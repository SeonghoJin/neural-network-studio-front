import { io, Socket } from 'socket.io-client';
import { useEffect, useRef, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { Simulate } from 'react-dom/test-utils';
import assert from 'assert';
import { sleep } from '../util';
import useAuthentication from './useAuthentication';
import config from '../config';
import useProjectShareLocation from './useProjectShareLocation';
import {
	ChangeCurrentUserResponse,
	InitDataRequest,
	InitDataResponse,
	JoinRequestData,
	JoinResponseData,
	LoginRequestData,
	LoginResponseData,
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

const useConnectSocket = () => {
	const socketRef = useRef<Socket | null>(null);
	const [socketProjectResult, setSocketProjectResult] = useRecoilState(socketProjectResultState);
	const { roomNo } = useProjectShareLocation();
	const projectResult = useProject();
	const { user } = useAuthentication();

	useEffect(() => {
		sleep(1000).then(() => {
			if (socketRef.current == null && projectResult.data) {
				socketRef.current = io(`${config.SOCKET_SERVER_PREFIX}`);

				socketRef.current?.on('connect', () => {
					console.log('Connecting Success!!!');
					const loginRequestData: LoginRequestData = {
						user: user?.profile as UserProfile,
					};
					socketRef.current?.emit(SocketEvent.LoginRequest, loginRequestData);

					const joinRequestData: JoinRequestData = {
						roomNo,
					};
					socketRef.current?.emit(SocketEvent.JoinRequest, joinRequestData);
				});

				socketRef.current?.on(SocketEvent.LoginResponse, (data: LoginResponseData) => {
					console.log(`login `, data);
				});

				socketRef.current?.on(SocketEvent.JoinResponse, (data: JoinResponseData) => {
					console.log(`join `, data);
					const { project, users } = data;
					setSocketProjectResult(project);
					if (project == null) {
						assert(projectResult.data != null);
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

				socketRef.current?.on('disconnect', () => {
					console.log('disconnect');
				});

				socketRef.current?.on('error', () => {
					console.log('error');
				});
			}
		});
	}, [projectResult.data, roomNo, setSocketProjectResult, user]);

	return {
		project: socketProjectResult,
	};
};

export default useConnectSocket;
