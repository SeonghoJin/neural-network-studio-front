import { atom, useRecoilState } from 'recoil';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { BlockMoveDto } from '../dto/block.move.dto';

type RemoteBlockMoveResult = BlockMoveDto | null;

const remoteBlockMoveResult = atom<RemoteBlockMoveResult>({
	key: 'remoteBlockMoveResult',
	default: null,
});

export const useRemoteBlockMove = () => {
	const [remoteBlockMove, setRemoteBlockMove] = useRecoilState<RemoteBlockMoveResult>(remoteBlockMoveResult);

	return {
		remoteBlockMove,
		setRemoteBlockMove,
	};
};
