import { useRecoilState } from 'recoil';
import { useCallback } from 'react';
import { CursorDragEvent, CursorPositionState } from './CursorPosition';

export const useCursorTracker = () => {
	const [cursorPosition, setCursorPosition] = useRecoilState(CursorPositionState);
	const [cursorDragEvent, setCursorDragEvent] = useRecoilState(CursorDragEvent);
	const onCursorDragStart = useCallback(() => {
		setCursorDragEvent({
			flag: true,
		});
	}, [setCursorDragEvent]);

	const onCursorDrag = useCallback(
		(e) => {
			setCursorPosition({
				y: e.clientY,
				x: e.clientX,
			});
		},
		[setCursorPosition]
	);

	const onCursorDragEnd = useCallback(() => {
		setCursorDragEvent({
			flag: false,
		});
		setCursorPosition(null);
	}, [setCursorDragEvent, setCursorPosition]);

	return {
		onCursorDragStart,
		onCursorDrag,
		onCursorDragEnd,
		cursorPosition,
		setCursorPosition,
		cursorDragEvent,
	};
};
