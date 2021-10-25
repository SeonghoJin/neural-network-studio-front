import { atom, useRecoilState } from 'recoil';
import { MessageDto } from '../dto/message.dto';

type MessageResult = MessageDto | null;

const messageResult = atom<MessageResult>({
	key: 'messageResult',
	default: null,
});

export const useMessageResult = () => {
	const [messageDto, setMessageDto] = useRecoilState<MessageResult>(messageResult);

	return {
		messageDto,
		setMessageDto,
	};
};
