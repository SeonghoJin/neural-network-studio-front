import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { Skeleton } from '@material-ui/lab';
import { CursorData } from './index';

type CursorProps = {
	userName: string;
	cursorData?: CursorData;
	color: string;
};

export const Cursor: FC<CursorProps> = ({ userName, cursorData, color }: CursorProps) => {
	return (
		<div
			style={{
				position: 'absolute',
				width: 'fit-content',
				height: 'fit-content',
				left: cursorData?.x || 0,
				top: cursorData?.y || 0,
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
			<Skeleton
				animation={false}
				width={130}
				height={70}
				style={{
					top: -35,
					left: -65,
					position: 'absolute',
					visibility: (cursorData?.drag && 'visible') || 'hidden',
				}}
			/>
			<span style={{ color, fontSize: 3, textShadow: 'black' }}>{userName}</span>
		</div>
	);
};

Cursor.defaultProps = {
	cursorData: undefined,
};
