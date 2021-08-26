import { useEffect, useState } from 'react';
import { XYPosition } from 'react-flow-renderer';
import { useRemoteCursorMove } from '../../../../core/Socket/hooks/useRemoteCursorMove';
import { useUserList } from '../../../../core/Socket/hooks/useUserListResponse';
import { CursorBackground } from './CursorBackground';
import { Cursor } from './Cursor';

type UserId = string;
type CursorPosition = XYPosition;

const CursorModule = () => {
	const { remoteCursorMove } = useRemoteCursorMove();
	const { userList } = useUserList();
	const [cursorPositions, setCursorPositions] = useState<Map<UserId, CursorPosition>>(
		new Map<UserId, CursorPosition>()
	);

	useEffect(() => {
		if (remoteCursorMove != null) {
			const userId = remoteCursorMove?.cursor?.user?.id as UserId;
			const position = remoteCursorMove?.cursor?.position as CursorPosition;
			cursorPositions.set(userId, position);
			setCursorPositions(new Map(cursorPositions));
		}
	}, [cursorPositions, remoteCursorMove, remoteCursorMove?.cursor?.position, remoteCursorMove?.cursor?.user?.id]);

	const cursors = userList?.users?.map((user) => {
		const { id, color, name } = user;
		if (!id || !color || !name) return null;
		const cursorPosition = cursorPositions.get(id);
		return <Cursor key={id} userName={name} color={color} position={cursorPosition} />;
	});

	return <CursorBackground>{cursors}</CursorBackground>;
};

export default CursorModule;
