import { atom } from 'recoil';
import * as stream from 'stream';
import { isBoolean } from 'util';

export type CursorPosition = {
	x: number;
	y: number;
} | null;

export const CursorPositionState = atom<CursorPosition>({
	key: 'cursorPositionState',
	default: null,
});

export type CursorDragEvent = {
	flag: boolean;
};

export const CursorDragEvent = atom<CursorDragEvent>({
	key: 'cursorPositionState',
	default: {
		flag: false,
	},
});
