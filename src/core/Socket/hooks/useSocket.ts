import { SocketContext, useSocketState } from '../Context/SocketContext';

export const useSocket = () => {
	const { socketService, socketRepository } = useSocketState();

	return {
		socketService,
	};
};
