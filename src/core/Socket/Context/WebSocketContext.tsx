import React, { useEffect, useState } from 'react';
import useProjectShareLocation from '../../../hooks/useProjectShareLocation';
import config from '../../../config';
import { useSocketDispatch, useSocketState } from './SocketContext';
import { WebSocketRepository } from '../SocketRepository/WebSocketRepository';
import { WebSocketService } from '../SocketService/WebSocketService';

export const WebSocketContext = ({ children }: { children: React.ReactNode }) => {
	const dispatch = useSocketDispatch();
	const location = useProjectShareLocation();
	const socketState = useSocketState();

	useEffect(() => {
		if (socketState.socketRepository === null || socketState.socketService === null) {
			const socket = new WebSocket(`${config.SOCKET_SERVER_PREFIX}/ws/${location.roomNo}`);
			socket.onopen = () => {
				console.log('open');
				const values = {
					socketRepository: new WebSocketRepository(socket),
					socketService: new WebSocketService(socket),
				};
				dispatch({
					payload: values,
				});
			};

			socket.onclose = () => {
				console.log('closed');
			};
		}
	}, [dispatch, location.roomNo, socketState.socketRepository, socketState.socketService]);

	useEffect(() => {
		return () => {
			socketState.socketService?.disconnect();
			socketState.socketService = null;
			socketState.socketRepository = null;
		};
	}, [socketState, socketState.socketService]);
	return <>{children}</>;
};
