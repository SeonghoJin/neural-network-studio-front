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
		<>
			<div
				style={{
					padding: '20px 40px 0px 40px',
					fontSize: 26,
				}}
			>
				Log
			</div>
			<div
				style={{
					width: '100%',
					marginTop: '20px',
					padding: '0px 40px 20px 40px',
					overflow: 'auto',
					fontSize: '15px',
					boxSizing: 'border-box',
					height: '300px',
				}}
			>
				{logs.map((log) => {
					return (
						<div
							id={log}
							style={{
								marginTop: '5px',
							}}
						>
							{log}
						</div>
					);
				})}
				<div ref={scrollRef} />
			</div>
		</>
	);
};
