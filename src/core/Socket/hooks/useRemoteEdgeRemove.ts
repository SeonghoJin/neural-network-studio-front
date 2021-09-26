import { atom, useRecoilState } from 'recoil';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { EdgeCreateDto } from '../dto/edge.create.dto';
import { EdgeRemoveDto } from '../dto/edge.remove.dto';

type RemoteEdgeRemoveResult = EdgeRemoveDto | null;

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
