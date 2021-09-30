import { Button, makeStyles } from '@material-ui/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BlockState } from '../../../../core/reactFlow/block/BlockState';
import { useCursorTracker } from '../../../CursorTracker/useCursorTracker';

const useBlockStyle = makeStyles({
	wrapper: {
		paddingLeft: 30,
	},
	item: {
		width: '100%',
		margin: 0,
		justifyContent: 'flex-start',
		color: '#707070',
		fontSize: 13,
		fontWeight: 400,
		height: 30,
	},
});

type Props = {
	state: BlockState;
};

const Node = ({ state }: Props) => {
	const classes = useBlockStyle();
	const { onCursorDrag, onCursorDragEnd, onCursorDragStart } = useCursorTracker();

	const setEmptyImage = useCallback((dataTransfer: DataTransfer) => {
		dataTransfer.setDragImage(document.createElement('img'), 0, 0);
	}, []);

	const onDragStart = useCallback(
		(event: React.DragEvent) => {
			const localEvent = event;
			setEmptyImage(localEvent.dataTransfer);
			localEvent.dataTransfer.setData('application/nodedata', JSON.stringify(state));
			localEvent.dataTransfer.effectAllowed = 'copy';
			window.addEventListener('drag', onCursorDrag);
		},
		[onCursorDrag, setEmptyImage, state]
	);

	const onDragEnd = useCallback(() => {
		window.removeEventListener('drag', onCursorDrag);
		onCursorDragEnd();
	}, [onCursorDrag, onCursorDragEnd]);

	return (
		<li className={classes.wrapper}>
			<Button
				style={{
					position: 'relative',
					zIndex: 12,
				}}
				className={classes.item}
				draggable
				onDragStart={(event) => {
					onDragStart(event);
					onCursorDragStart();
				}}
				onDragEnd={onDragEnd}
			>
				<h5 style={{ margin: 0 }}>{state.type}</h5>
			</Button>
		</li>
	);
};

export default Node;
