import { atom, useRecoilState } from 'recoil';
import { useEffect, useRef, useState } from 'react';
import { Epoch } from '../types';

type GetTrainMessage = string[];

const getTrainMessage = atom<GetTrainMessage>({
	key: 'getTrainMessage',
	default: [],
});

const getEpochs = atom<Epoch[] | null>({
	key: 'epoch',
	default: null,
});

export const useTrainSocket = () => {
	const [trainMessage, setTrainMessage] = useRecoilState<GetTrainMessage>(getTrainMessage);
	const [epochs, setEpochs] = useRecoilState<Epoch[] | null>(getEpochs);
	const socket = useRef<WebSocket | null>(null);

	useEffect(() => {
		return () => {
			setTrainMessage([]);
		};
	}, [setTrainMessage]);

	useEffect(() => {
		return () => {
			setEpochs(null);
		};
	}, [setEpochs]);

	return {
		trainMessage,
		setTrainMessage,
		epochs,
		setEpochs,
		socket,
	};
};
