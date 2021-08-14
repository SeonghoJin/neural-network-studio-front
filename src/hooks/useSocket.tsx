import { io, Socket } from 'socket.io-client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { sleep } from '../util';
import useAuthentication from './useAuthentication';

type Params = {
	roomNo: string;
};

export const JoinRooms = atom<Set<string>>({
	key: 'JoinRooms',
	default: new Set<string>(),
});

export const Chats = atom<Map<string, Array<string>>>({
	key: 'chats',
	default: new Map<string, Array<string>>(),
});

const useConnectSocket = () => {
	const socketRef = useRef<Socket | null>(null);
	const [loading, setLoading] = useState(true);
	const [joinRooms, setJoinRooms] = useRecoilState(JoinRooms);
	const [chats, setChats] = useRecoilState(Chats);
	const { user } = useAuthentication();

	useEffect(() => {
		sleep(1000).then(() => {
			if (socketRef.current == null) {
				socketRef.current = io('http://localhost:8081');
				socketRef.current?.on('connect', () => {
					setLoading(false);
				});
				socketRef.current?.on('disconnect', () => {
					console.log('disconnect');
				});
				socketRef.current?.on('error', () => {
					setLoading(false);
				});
				socketRef.current?.on('joinSuccess', (roomNo) => {
					console.log('joinSuccess', roomNo);
					setJoinRooms(joinRooms.add(roomNo));
					setLoading(false);
				});
				socketRef.current?.on('leaveSuccess', (msg) => {
					console.log('leaveSuccess', msg);
					const newJoinRooms = new Set<string>(joinRooms);
					newJoinRooms.delete(msg);
					setJoinRooms(newJoinRooms);
					setLoading(false);
				});
				socketRef.current?.on('chatSuccess', (data) => {
					const { msg, sender, roomNo } = data;
					console.log(`chatsuccess ${msg}`, sender);
					const chatHistory = chats.get(roomNo);
					if (chatHistory == null) {
						chats.set(roomNo, [`${sender} : ${msg}`]);
					} else {
						const newChatHistory = new Array<string>(...chatHistory);
						chats.set(roomNo, newChatHistory.concat(`${sender} : ${msg}`));
					}
					setChats(new Map(chats));
				});
			}
		});
	}, [chats, joinRooms, setChats, setJoinRooms, user]);

	const join = useCallback(
		(roomNo) => {
			setLoading(true);

			sleep(500).then(() => {
				socketRef.current?.emit('joinShareProject', {
					user,
					roomNo,
				});
			});
		},
		[user]
	);

	const leave = useCallback(
		(roomNo) => {
			setLoading(true);
			sleep(500).then(() => {
				socketRef.current?.emit('leaveShareProject', {
					user,
					roomNo,
				});
			});
		},
		[user]
	);

	const chat = useCallback(
		(roomNo, msg) => {
			socketRef.current?.emit('chat', {
				user,
				roomNo,
				msg,
			});
		},
		[user]
	);

	return {
		connected: socketRef.current?.connected,
		loading,
		chat,
		join,
		leave,
	};
};

export default useConnectSocket;
