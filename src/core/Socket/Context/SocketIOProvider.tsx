import React, { useContext } from 'react';
import { io } from 'socket.io-client';
import { SocketContext } from './SocketContext';
import { SocketIoRepository } from '../SocketRepository/Socket.io.Repository';
import config from '../../../config';
import { SocketIoService } from '../SocketService/Socket.io.Service';
import useProjectShareLocation from '../../../hooks/useProjectShareLocation';

export const SocketIOProvider = ({ children }: { children: React.ReactNode }) => {
	const location = useProjectShareLocation();
	const socket = io(`${config.SOCKET_SERVER_PREFIX}/${location.roomNo}`);
	const values = {
		socketRepository: new SocketIoRepository(socket),
		socketService: new SocketIoService(socket),
	};
	return <SocketContext.Provider value={values}>{children}</SocketContext.Provider>;
};
