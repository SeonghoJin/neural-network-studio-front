import { useCallback, useEffect, useRef } from 'react';

type Props = {
	logs: string[];
};

export const LogViewer = ({ logs }: Props) => {
	const scrollRef = useRef<null | HTMLDivElement>(null);
	const scrollToBottom = useCallback(() => {
		scrollRef.current?.scrollIntoView({
			behavior: 'smooth',
		});
	}, []);

	useEffect(() => {
		if (logs.length > 0) {
			scrollToBottom();
		}
	}, [logs.length, scrollToBottom]);

	return (
		<>
			{logs.map((log) => {
				return <div>{log}</div>;
			})}
			<div ref={scrollRef} />
		</>
	);
};
