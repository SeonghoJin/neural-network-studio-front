import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

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
		<div
			className="box"
			style={{
				width: '100%',
				flex: '1',
				padding: '20px 20px 0px 20px',
				overflow: 'auto',
				fontSize: '15px',
				boxSizing: 'border-box',
			}}
		>
			<div className="tit">Log</div>
			{logs.map((log) => {
				return <div id={log}>{log}</div>;
			})}
			<div ref={scrollRef} />
		</div>
	);
};
