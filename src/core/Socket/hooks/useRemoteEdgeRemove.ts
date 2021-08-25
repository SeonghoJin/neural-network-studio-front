import { atom, useRecoilState } from 'recoil';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { EdgeCreateDto } from '../dto/edge.create.dto';

type RemoteEdgeRemoveResult = EdgeCreateDto | null;

const remoteEdgeRemoveResult = atom<RemoteEdgeRemoveResult>({
	key: 'remoteEdgeRemoveResult',
	default: null,
});

export const useRemoteEdgeRemove = () => {
	const [remoteEdgeRemove, setRemoteEdgeRemove] = useRecoilState<RemoteEdgeRemoveResult>(remoteEdgeRemoveResult);

	return {
		remoteEdgeRemove,
		setRemoteEdgeRemove,
	};
};
