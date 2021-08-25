import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { atom, useRecoilState } from 'recoil';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { useStoreState, XYPosition } from 'react-flow-renderer';
import { FC } from 'react';
import { useRemoteCursorMove } from '../../../core/Socket/hooks/useRemoteCursorMove';

type Props = {
	ownerName: string;
};

type CursorProps = {
	userName: string;
	position?: XYPosition;
	color: string;
};

const CursorColors = atom({
	key: 'CursorColors',
	default: new Map<string, string>(),
});

const Cursor: FC<CursorProps> = ({ userName, position, color }: CursorProps) => {
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

const Cursors = () => {
	const [cursorColors] = useRecoilState(CursorColors);
	const { remoteCursorMove } = useRemoteCursorMove();
	const transform = useStoreState((state) => state.transform);
	return (
		<div
			style={{
				zIndex: 4,
				position: 'absolute',
			}}
		>
			<div
				style={{
					width: '100%',
					height: '100%',
					position: 'absolute',
					transformOrigin: '0 0',
					zIndex: 3,
					transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
				}}
			>
				<Cursor
					key={remoteCursorMove?.cursor?.user?.name}
					userName={remoteCursorMove?.cursor?.user?.name as string}
					position={remoteCursorMove?.cursor?.position}
					color="#0067a3"
				/>
			</div>
		</div>
	);
};

export default Cursors;
