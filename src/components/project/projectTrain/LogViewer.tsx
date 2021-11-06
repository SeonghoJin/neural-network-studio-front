import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Props = {
	logs: string[];
};

export const LogViewer = ({ logs }: Props) => {
	const scrollRef = useRef<null | HTMLDivElement>(null);
	const [count, setCount] = useState<number>(0);

	const interval = useMemo(() => {
		return setInterval(() => {
			setCount((prev) => (prev + 1) % 4);
		}, 1000);
	}, []);

	const scrollToBottom = useCallback(() => {
		scrollRef.current?.scrollIntoView({
			behavior: 'smooth',
		});
	}, []);

	useEffect(() => {
		if (logs.length > 0) {
			scrollToBottom();
			clearInterval(interval);
		}
	}, [interval, logs.length, scrollToBottom]);

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
			{`학습 중${'.'.repeat(count)}`}
			{logs.map((log) => {
				return <div>{log}</div>;
			})}
			<div ref={scrollRef} />
		</div>
	);
};
