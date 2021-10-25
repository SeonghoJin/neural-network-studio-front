import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';
import { ChangeEvent, KeyboardEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { isEdge, isNode } from 'react-flow-nns';
import { eventNames } from 'cluster';
import useAuthentication from '../../../../../hooks/useAuthentication';
import { MessageDto } from '../../../../../core/Socket/dto/message.dto';
import { useSocket } from '../../../../../core/Socket/hooks/useSocket';
import { SocketEvent } from '../../../../../core/Socket/SocketEvent';
import { useMessageResult } from '../../../../../core/Socket/hooks/useSendMessage';

const Wrapper = styled.div`
	box-sizing: border-box;
	width: 100%;
	flex: 1;
	padding: 10px;
	display: flex;
	background-color: white;
	flex-direction: column;
	max-height: 60%;
`;

const ChatWrapper = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 85%;
	padding-bottom: 5px;
	overflow: auto;
`;

const ChatInsertWrapper = styled.div`
	box-sizing: border-box;
	width: 100%;
	flex: 1;
	padding-top: 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

type MessageComponentProp = Omit<MessageDto, 'message'> & { mine: boolean };

const MessageComponentWrapper = styled.div`
	max-width: 70%;
	margin-bottom: 15px;
	padding: 5px;
	border-radius: 10px;
`;

const MessageHead = styled.div`
	font-size: x-small;
`;

const MessageBody = styled.div`
	word-break: break-all;
	font-size: small;
`;

const MessageComponent = ({ chat, mine, name }: MessageComponentProp) => {
	return (
		<MessageComponentWrapper
			style={{
				backgroundColor: `${!mine ? '#e9e9e9' : '#34b691'}`,
				color: `${!mine ? 'black' : 'white'}`,
			}}
		>
			<MessageHead>{name}</MessageHead>
			<MessageBody>{chat}</MessageBody>
		</MessageComponentWrapper>
	);
};

export const ChatComponent = () => {
	const { user } = useAuthentication();
	const [messages, setMessages] = useState<Array<MessageComponentProp>>(Array<MessageComponentProp>(0));
	const [chat, setChat] = useState('');
	const { socketService } = useSocket();
	const { messageDto } = useMessageResult();
	const scrollRef = useRef<HTMLDivElement | null>(null);

	const scrollToBottom = useCallback(() => {
		scrollRef.current?.scrollIntoView({
			behavior: 'smooth',
		});
	}, []);

	useEffect(() => {
		if (messageDto != null) {
			setMessages((messageCmps) =>
				messageCmps.concat({
					...messageDto,
					mine: false,
				})
			);
		}
	}, [messageDto]);

	useEffect(() => {
		if (messages.length > 0) {
			scrollToBottom();
		}
	}, [messages, scrollToBottom]);

	const onSend = useCallback(() => {
		const dto: MessageDto = {
			chat,
			message: SocketEvent.SendMessage,
			name: user?.profile?.name || '',
		};
		socketService?.sendMessage(dto);
		setChat('');
		setMessages((messagedtos) =>
			messagedtos.concat({
				...dto,
				mine: true,
			})
		);
	}, [chat, socketService, user?.profile?.name]);

	const onChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setChat(e.target.value);
		},
		[setChat]
	);

	const onKeyDown: KeyboardEventHandler = useCallback(
		(event) => {
			if (event.code === 'Enter') {
				onSend();
			}
		},
		[onSend]
	);

	return (
		<Wrapper>
			<ChatWrapper>
				<ul
					style={{
						width: '100%',
						height: '100%',
					}}
				>
					{messages.map((message, index) => {
						return (
							<li
								/* eslint-disable-next-line react/no-array-index-key */
								key={message.chat + message.name + index}
								style={{
									width: '100%',
									display: 'flex',
									flexDirection: 'column',
									alignItems: `${message.mine ? 'flex-end' : 'flex-start'}`,
								}}
							>
								<MessageComponent chat={message.chat} name={message.name} mine={message.mine} />
							</li>
						);
					})}
					<div ref={scrollRef} style={{}} />
				</ul>
			</ChatWrapper>
			<ChatInsertWrapper>
				<TextField
					onChange={onChange}
					style={{
						padding: 5,
						width: '100%',
					}}
					value={chat}
					onKeyPress={onKeyDown}
				/>
				<Button variant="contained" color="primary" onClick={onSend}>
					Send
				</Button>
			</ChatInsertWrapper>
		</Wrapper>
	);
};
