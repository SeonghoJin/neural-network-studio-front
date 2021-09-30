import { atom } from 'recoil';

export type CursorPosition = {
	x: number;
	y: number;
} | null;

export const CursorPositionState = atom<CursorPosition>({
	key: 'cursorPositionState',
	default: null,
});
