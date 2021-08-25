import { atom, useRecoilState } from 'recoil';
import { CursorMoveDto } from '../dto/cursor.move.dto';

type RemoteCursorMoveResult = CursorMoveDto | null;

const remoteCursorMoveResult = atom<RemoteCursorMoveResult>({
	key: 'remoteCursorMoveResult',
	default: null,
});

export const useRemoteCursorMove = () => {
	const [remoteCursorMove, setRemoteCursorMove] = useRecoilState<RemoteCursorMoveResult>(remoteCursorMoveResult);

	return {
		remoteCursorMove,
		setRemoteCursorMove,
	};
};
