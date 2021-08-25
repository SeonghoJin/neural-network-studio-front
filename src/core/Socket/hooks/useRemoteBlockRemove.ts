import { atom, useRecoilState } from 'recoil';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { BlockRemoveDto } from '../dto/block.remove.dto';

type RemoteBlockRemoveResult = BlockRemoveDto | null;

const remoteBlockRemoveResult = atom<RemoteBlockRemoveResult>({
	key: 'remoteBlockRemoveResult',
	default: null,
});

export const useRemoteBlockRemove = () => {
	const [remoteBlockRemove, setRemoteBlockRemove] = useRecoilState<RemoteBlockRemoveResult>(remoteBlockRemoveResult);

	return {
		remoteBlockRemove,
		setRemoteBlockRemove,
	};
};
