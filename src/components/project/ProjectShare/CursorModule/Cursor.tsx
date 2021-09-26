import { XYPosition } from 'react-flow-nns';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';

type CursorProps = {
	userName: string;
	position?: XYPosition;
	color: string;
};

export const Cursor: FC<CursorProps> = ({ userName, position, color }: CursorProps) => {
	return (
		<div
			style={{
				position: 'absolute',
				width: 'fit-content',
				height: 'fit-content',
				left: position?.x || 0,
				top: position?.y || 0,
				zIndex: 1000,
			}}
		>
			<FontAwesomeIcon
				icon={faMousePointer}
				color={color}
				style={{
					boxShadow: 'black',
				}}
			/>
			<span style={{ color, fontSize: 3, textShadow: 'black' }}>{userName}</span>
		</div>
	);
};

Cursor.defaultProps = {
	position: undefined,
};
