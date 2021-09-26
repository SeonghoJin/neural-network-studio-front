import { useEffect, useState } from 'react';
import { XYPosition } from 'react-flow-nns';
import { useRemoteCursorMove } from '../../../../core/Socket/hooks/useRemoteCursorMove';
import { useUserList } from '../../../../core/Socket/hooks/useUserListResponse';
import { CursorBackground } from './CursorBackground';
import { Cursor } from './Cursor';
import { useCreateUserResponse } from '../../../../core/Socket/hooks/useCreateUserResponse';

type UserId = string;
type CursorPosition = XYPosition;

const CursorModule = () => {
	const { remoteCursorMove } = useRemoteCursorMove();
	const { userList } = useUserList();
	const { createdUserResponse } = useCreateUserResponse();
	const [cursorPositions, setCursorPositions] = useState<Map<UserId, CursorPosition>>(
		new Map<UserId, CursorPosition>()
	);

	useEffect(() => {
		if (remoteCursorMove != null) {
			const userId = remoteCursorMove?.cursor?.user?.id as UserId;
			const position = remoteCursorMove?.cursor?.position as CursorPosition;
			setCursorPositions((state) => {
				return state.set(userId, position);
			});
		}
	}, [remoteCursorMove, remoteCursorMove?.cursor?.position, remoteCursorMove?.cursor?.user?.id]);

	const cursors = userList?.users?.map((user) => {
		const { id, color, name } = user;
		const createUserResponse = createdUserResponse;
		if (!id || !color || !name || createUserResponse?.user?.id === id) return null;
		const cursorPosition = cursorPositions.get(id);
		return <Cursor key={id} userName={name} color={color} position={cursorPosition} />;
	});

	return <CursorBackground>{cursors}</CursorBackground>;
};

export default CursorModule;
