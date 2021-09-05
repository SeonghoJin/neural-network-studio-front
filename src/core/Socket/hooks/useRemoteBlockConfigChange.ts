import { atom, useRecoilState } from 'recoil';
import { BlockConfigChangeDto } from '../dto/block.config.change.dto';

type RemoteBlockConfigChangeResult = BlockConfigChangeDto | null;

const remoteBlockConfigChangeResult = atom<RemoteBlockConfigChangeResult>({
	key: 'remoteBlockConfigChangeResult',
	default: null,
});

export const useRemoteBlockConfigChange = () => {
	const [remoteBlockConfigChange, setRemoteBlockConfigChange] =
		useRecoilState<RemoteBlockConfigChangeResult>(remoteBlockConfigChangeResult);

	return {
		remoteBlockConfigChange,
		setRemoteBlockConfigChange,
	};
};
