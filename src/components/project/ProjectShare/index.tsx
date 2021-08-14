import { Button } from '@material-ui/core';
import { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import useConnectSocket, { Chats, JoinRooms } from '../../../hooks/useSocket';
import useProjectShareLocation from '../../../hooks/useProjectShareLocation';
import SimpleBackdrop from '../../utils/BackLoading';
import PrivateAuthentication from '../../../Authentication/PrivateAuthentication';

const rooms = ['hi', 'hello', 'dkssud'];
const ProjectShare = () => {
	const { roomNo } = useProjectShareLocation();
	const { loading, connected, join, leave, chat } = useConnectSocket();
	const [joinRooms] = useRecoilState(JoinRooms);
	const [chats] = useRecoilState(Chats);
	const [inputs, setInputs] = useState({
		[rooms[0]]: '',
		[rooms[1]]: '',
		[rooms[2]]: '',
	});

	const onClick = useCallback(
		(room: any) => {
			chat(room, inputs[room]);
			setInputs({
				...inputs,
				[room]: '',
			});
		},
		[chat, inputs]
	);

	return (
		<PrivateAuthentication>
			<div>
				ProjectShare
				<SimpleBackdrop open={loading} />
				<ul>
					{rooms.map((room) => {
						const joined = joinRooms.has(room);
						const roomChats = chats.get(room);
						return (
							<li>
								<div>
									{room}
									{/* eslint-disable-next-line react/button-has-type */}
									<Button
										onClick={() => {
											if (joined) {
												leave(room);
											} else {
												join(room);
											}
										}}
									>{`${room} ${joined ? 'leave' : 'join'}`}</Button>
								</div>
								<div>
									<input
										name={room}
										onChange={(e) => {
											const { name, value } = e.target;
											setInputs({
												...inputs,
												[name]: value,
											});
										}}
										value={inputs[room]}
									/>
									<Button
										disabled={!joined}
										color="primary"
										onClick={() => {
											onClick(room);
										}}
									>
										채팅하기
									</Button>
								</div>
								<ul>
									{roomChats?.map((roomChat, index) => {
										// eslint-disable-next-line react/no-array-index-key
										return <li key={index}>{roomChat}</li>;
									})}
								</ul>
							</li>
						);
					})}
				</ul>
			</div>
		</PrivateAuthentication>
	);
};

export default ProjectShare;
