import React, { useContext, useReducer } from 'react';
import { SocketConnectOpts } from 'net';
import { SocketService } from '../SocketService/SocketService';
import { SocketRepository } from '../SocketRepository/SocketRespository';

export const SocketContext = React.createContext<{
	socketService: SocketService | null;
	socketRepository: SocketRepository | null;
}>({
	socketRepository: null,
	socketService: null,
});

export const SocketDispatch = React.createContext<any>(null);

function reducer(state: any, action: any) {
	return {
		...action.payload,
	};
}

export function SocketProvider({ children }: { children: any }) {
	const [state, dispatch] = useReducer(reducer, {
		socketRepository: null,
		socketService: null,
	});

	return (
		<SocketContext.Provider value={state}>
			<SocketDispatch.Provider value={dispatch}>{children}</SocketDispatch.Provider>
		</SocketContext.Provider>
	);
}

export function useSocketState() {
	const state = useContext(SocketContext);
	if (!state) throw new Error('Cannot find Socket');
	return state;
}

export function useSocketDispatch() {
	const state = useContext(SocketDispatch);
	if (!state) throw new Error('Cannot find Socket');
	return state;
}
