import { useEffect, useState } from 'react';
import { useRemoteCursorMove } from '../../../../core/Socket/hooks/useRemoteCursorMove';
import { useUserList } from '../../../../core/Socket/hooks/useUserListResponse';
import { CursorBackground } from './CursorBackground';
import { Cursor } from './Cursor';
import { useCreateUserResponse } from '../../../../core/Socket/hooks/useCreateUserResponse';

type UserId = string;
export type CursorData = {
	drag: boolean | undefined;
	x: number | undefined;
	y: number | undefined;
};

const CursorModule = () => {
	const { remoteCursorMove } = useRemoteCursorMove();
	const { userList } = useUserList();
	const { createdUserResponse } = useCreateUserResponse();
	const [cursorData, setCursorData] = useState<Map<UserId, CursorData>>(new Map<UserId, CursorData>());

	useEffect(() => {
		if (remoteCursorMove != null) {
			console.log(remoteCursorMove.cursor);
			const userId = remoteCursorMove?.cursor?.user?.id as UserId;
			const _cursorData: CursorData = {
				drag: remoteCursorMove.cursor?.drag,
				x: remoteCursorMove.cursor?.position?.x,
				y: remoteCursorMove.cursor?.position?.y,
			};
			setCursorData((state) => {
				return state.set(userId, _cursorData);
			});
		}
	}, [remoteCursorMove, remoteCursorMove?.cursor, remoteCursorMove?.cursor?.user?.id]);

	const cursors = userList?.users?.map((user) => {
		const { id, color, name } = user;
		const createUserResponse = createdUserResponse;
		if (!id || !color || !name || createUserResponse?.user?.id === id) return null;
		const _cursorData = cursorData.get(id);
		return <Cursor key={id} userName={name} color={color} cursorData={_cursorData} />;
	});

	return <CursorBackground>{cursors}</CursorBackground>;
};

export default CursorModule;
