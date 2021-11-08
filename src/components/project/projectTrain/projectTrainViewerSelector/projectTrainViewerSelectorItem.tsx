import { makeStyles } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { TrainHistory } from '../types';

const useStyle = makeStyles({
	wrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
	},
	container: {
		width: '100%',
		height: '100%',
		padding: '10px',
		borderBottom: '1px solid #B2B2B2',
		'&:hover': {
			backgroundColor: '#FFFFFF',
		},
	},
	active: {
		width: '100%',
		height: '100%',
		display: 'block',
		backgroundColor: '#FFFFFF',
	},
	toggleBtn: {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		fontSize: '14px',
	},
});

type Props = {
	trainHistory: TrainHistory;
	onClick: () => void;
};

const ProjectTrainDetailItem = ({ name, value }: { name: string; value: string }) => {
	return (
		<div
			style={{
				marginBottom: '10px',
			}}
		>
			<p>
				<strong>{name}</strong>
				<p>{value}</p>
			</p>
		</div>
	);
};

const ProjectTrainViewerHeader = ({ trainHistory, onClick }: Props) => {
	const classes = useStyle();
	const [toggleFlag, setToggleFlag] = useState<boolean>(false);

	const onToggle = useCallback(() => {
		setToggleFlag((prev) => !prev);
	}, [setToggleFlag]);

	return (
		<>
			<div className={`tit ${classes.wrapper}`} onClick={onClick} onKeyDown={() => onClick()}>
				{`${trainHistory.trainNo}번 학습결과`}
				<Button
					variant="text"
					color="secondary"
					style={{
						height: '20px',
						padding: '5px',
						minWidth: '0px',
						alignSelf: 'center',
					}}
					onClick={onToggle}
				>
					더보기
				</Button>
			</div>
			<div className={`depth ${toggleFlag ? 'active' : ''}`}>
				<ProjectTrainDetailItem name="Epoch" value={trainHistory.epochs.toString()} />
				<ProjectTrainDetailItem name="학습 정확도" value={trainHistory.acc.toString()} />
				<ProjectTrainDetailItem name="학습 손실" value={trainHistory.loss.toString()} />
				<ProjectTrainDetailItem name="검증 정확도" value={trainHistory.valAcc.toString()} />
				<ProjectTrainDetailItem name="검증 손실" value={trainHistory.valLoss.toString()} />
				<ProjectTrainDetailItem name="학습 시작 시간" value={trainHistory.createTime} />
				<Button
					href={trainHistory.resultUrl}
					variant="contained"
					style={{
						width: '100%',
					}}
					disabled={trainHistory.resultUrl === ''}
				>
					모델 내려받기
				</Button>
			</div>
		</>
	);
};

export default ProjectTrainViewerHeader;
