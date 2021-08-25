import React, { useContext } from 'react';
import { SocketService } from '../SocketService/SocketService';
import { SocketRepository } from '../SocketRepository/SocketRespository';

export const SocketContext = React.createContext<{
	socketService: SocketService | null;
	socketRepository: SocketRepository | null;
}>({
	socketRepository: null,
	socketService: null,
});
