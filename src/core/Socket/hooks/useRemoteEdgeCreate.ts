import { atom, useRecoilState } from 'recoil';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { EdgeCreateDto } from '../dto/edge.create.dto';

type RemoteEdgeCreateResult = EdgeCreateDto | null;

const remoteEdgeCreateResult = atom<RemoteEdgeCreateResult>({
	key: 'remoteEdgeCreateResult',
	default: null,
});

export const useRemoteEdgeCreate = () => {
	const [remoteEdgeCreate, setRemoteEdgeCreate] = useRecoilState<RemoteEdgeCreateResult>(remoteEdgeCreateResult);

	return {
		remoteEdgeCreate,
		setRemoteEdgeCreate,
	};
};
