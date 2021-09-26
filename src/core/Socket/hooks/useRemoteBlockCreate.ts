import { atom, useRecoilState } from 'recoil';
import { BlockCreateDto } from '../dto/block.create.dto';

type RemoteBlockCreateResult = BlockCreateDto | null;

const remoteBlockCreateResult = atom<RemoteBlockCreateResult>({
	key: 'remoteBlockCreateResult',
	default: null,
});

export const useRemoteBlockCreate = () => {
	const [remoteBlockCreate, setRemoteBlockCreate] = useRecoilState<RemoteBlockCreateResult>(remoteBlockCreateResult);

	return {
		remoteBlockCreate,
		setRemoteBlockCreate,
	};
};
