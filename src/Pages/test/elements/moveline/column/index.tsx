import { makeStyles } from '@material-ui/core';
import { MouseEventHandler, useRef } from 'react';

const useStyle = makeStyles({
	a: {
		width: '100vw',
		height: '100vh',
		display: 'flex',
		flexDirection: 'row',
	},
	b: {
		position: 'relative',
		width: '500px',
		height: '100%',
		backgroundColor: 'greenyellow',
	},
	c: {
		width: '100%',
		height: '100%',
		backgroundColor: 'aqua',
	},
	d: {
		width: '3px',
		borderLeft: '3px solid black',
	},
	button: {
		height: '100%',
		width: '24px',
		top: 0,
		backgroundColor: 'transparent',
		border: '0',
		padding: '0',
		position: 'absolute',
		left: '100%',
		bottom: '0',
		outline: 'none',
		cursor: 'ew-resize',
		'&:hover *': {
			backgroundColor: 'white',
		},
	},
	column: {
		backgroundColor: 'black',
		height: '100%',
		opacity: 0.5,
		bottom: 0,
		pointerEvents: 'none',
		position: 'absolute',
		width: '3px',
	},
});

const mouseMoveHandler = (e: MouseEvent) => {
	const dx = e.clientX;
	const dy = e.clientY;
	(e.target as HTMLButtonElement).style.left += dx;
	// const newLeftWidth = (leftWidth + dx) * 100 / resizer.parentNode.getBoundingClientRect().width;
};

const ColumnMoveLine = () => {
	const classes = useStyle();
	const ref = useRef<HTMLDivElement | null>(null);
	return (
		<div
			className={classes.a}
			onMouseMove={(e) => {
				if (ref.current?.style.width != null) {
					ref.current.style.width = e.clientY.toString();
				}
			}}
		>
			<div className={classes.b}>
				{/* eslint-disable-next-line jsx-a11y/role-supports-aria-props,react/button-has-type */}
				<button className={classes.button} aria-valuenow={50} aria-valuemax={100} aria-valuemin={0}>
					<div
						ref={ref}
						style={{
							zIndex: 1,
						}}
						className={classes.column}
					/>
				</button>
			</div>
			<div className={classes.c} />
		</div>
	);
};

export default ColumnMoveLine;
