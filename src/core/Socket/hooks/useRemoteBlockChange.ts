import { atom, useRecoilState } from 'recoil';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { BlockChangeDto } from '../dto/block.change.dto';

type RemoteBlockChangeResult = BlockChangeDto | null;

const remoteBlockChangeResult = atom<RemoteBlockChangeResult>({
	key: 'remoteBlockChangeResult',
	default: null,
});

export const useRemoteBlockChange = () => {
	const [remoteBlockChange, setRemoteBlockChange] = useRecoilState<RemoteBlockChangeResult>(remoteBlockChangeResult);

	return {
		remoteBlockChange,
		setRemoteBlockChange,
	};
};
