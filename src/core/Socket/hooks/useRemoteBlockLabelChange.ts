import { atom, useRecoilState } from 'recoil';
import { BlockLabelChangeDto } from '../dto/block.label.change.dto';

type RemoteBlockLabelChangeResult = BlockLabelChangeDto | null;

const remoteBlockLabelChangeResult = atom<RemoteBlockLabelChangeResult>({
	key: 'remoteBlockLabelChangeResult',
	default: null,
});

export const useRemoteBlockLabelChange = () => {
	const [remoteBlockLabelChange, setRemoteBlockLabelChange] =
		useRecoilState<RemoteBlockLabelChangeResult>(remoteBlockLabelChangeResult);

	return {
		remoteBlockLabelChange,
		setRemoteBlockLabelChange,
	};
};
