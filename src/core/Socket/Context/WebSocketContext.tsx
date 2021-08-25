import React from 'react';
import useProjectShareLocation from '../../../hooks/useProjectShareLocation';
import config from '../../../config';
import { SocketContext } from './SocketContext';
import { WebSocketRepository } from '../SocketRepository/WebSocketRepository';
import { WebSocketService } from '../SocketService/WebSocketService';

export const WebSocketContext = ({ children }: { children: React.ReactNode }) => {
	const location = useProjectShareLocation();
	const socket = new WebSocket(`${config.SOCKET_SERVER_PREFIX}/${location.roomNo}`);
	const values = {
		socketRepository: new WebSocketRepository(socket),
		socketService: new WebSocketService(socket),
	};
	return <SocketContext.Provider value={values}>{children}</SocketContext.Provider>;
};
