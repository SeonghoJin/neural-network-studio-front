import React from 'react';
import { useLocation } from 'react-router-dom';
import useProjectShareLocation from '../../../hooks/useProjectShareLocation';
import config from '../../../config';
import { SocketContext } from './SocketContext';
import { WebSocketRepository } from '../SocketRepository/WebSocketRepository';
import { WebSocketService } from '../SocketService/WebSocketService';

export const WebSocketContext = ({ children }: { children: React.ReactNode }) => {
	console.log(useLocation());
	const location = useProjectShareLocation();
	const socket = new WebSocket(`${config.SOCKET_SERVER_PREFIX}/ws/${location.roomNo}`);
	const values = {
		socketRepository: new WebSocketRepository(socket),
		socketService: new WebSocketService(socket),
	};
	return <SocketContext.Provider value={values}>{children}</SocketContext.Provider>;
};
