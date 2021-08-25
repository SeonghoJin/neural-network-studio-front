import { useContext, useEffect } from 'react';
import { SocketContext } from '../Context/SocketContext';
import { SocketEvent } from '../SocketEvent';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { useRemoteCursorMove } from './useRemoteCursorMove';

export const useSocket = () => {
	const { socketService, socketRepository } = useContext(SocketContext);
	const { setRemoteCursorMove } = useRemoteCursorMove();
	useEffect(() => {
		socketRepository?.moveCursor(SocketEvent.MoveCursor, (data: CursorMoveDto) => {
			console.log(data);
			setRemoteCursorMove(data);
		});
	}, [setRemoteCursorMove, socketRepository]);

	return {
		socketService,
	};
};
