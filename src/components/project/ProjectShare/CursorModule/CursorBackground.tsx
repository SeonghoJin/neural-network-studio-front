import { ReactNode } from 'react';
import { useStoreState } from 'react-flow-renderer';

export const CursorBackground = ({ children }: { children: ReactNode }) => {
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
				{children}
			</div>
		</div>
	);
};
