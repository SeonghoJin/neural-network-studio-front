import { io, Socket } from 'socket.io-client';
import { useEffect, useRef, useState } from 'react';

const useConnectSocket = () => {
	const socketRef = useRef<Socket | null>(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		socketRef.current = io('http://localhost:8081');
		socketRef.current?.on('connect', () => {
			setLoading(false);
		});
		socketRef.current?.on('disconnect', () => {
			setLoading(true);
		});
		socketRef.current?.on('error', () => {
			setLoading(true);
		});
	}, []);
};
