import { useRecoilState } from 'recoil';
import { useCallback } from 'react';
import { CursorPositionState } from './CursorPosition';

export const useCursorTracker = () => {
	const [cursorPosition, setCursorPosition] = useRecoilState(CursorPositionState);

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
		setCursorPosition(null);
	}, [setCursorPosition]);

	return {
		onCursorDrag,
		onCursorDragEnd,
		cursorPosition,
		setCursorPosition,
	};
};
