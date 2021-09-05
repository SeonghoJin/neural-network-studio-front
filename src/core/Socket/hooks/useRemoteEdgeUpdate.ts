import { atom, useRecoilState } from 'recoil';
import { CursorMoveDto } from '../dto/cursor.move.dto';
import { EdgeCreateDto } from '../dto/edge.create.dto';
import { EdgeUpdateDto } from '../dto/edge.update.dto';

type RemoteEdgeUpdateResult = EdgeUpdateDto | null;

const remoteEdgeUpdateResult = atom<RemoteEdgeUpdateResult>({
	key: 'remoteEdgeUpdateResult',
	default: null,
});

export const useRemoteEdgeUpdate = () => {
	const [remoteEdgeUpdate, setRemoteEdgeUpdate] = useRecoilState<RemoteEdgeUpdateResult>(remoteEdgeUpdateResult);

	return {
		remoteEdgeUpdate,
		setRemoteEdgeUpdate,
	};
};
