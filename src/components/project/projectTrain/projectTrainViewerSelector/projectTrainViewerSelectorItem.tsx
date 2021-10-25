import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import $ from 'jquery';
import { TrainHistory } from '../types';
import select from '../../../../static/img/ico_arrow_select1.png';

const useStyle = makeStyles({
	wrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		height: '100px',
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
	head: TrainHistory;
	onClick: () => void;
};

const ProjectTrainViewerSelectorItem = ({ head, onClick }: Props) => {
	const classes = useStyle();

	const onToggle = (e: any) => {
		$(e.target).toggleClass('active');
		$(e.target).parent().next().slideToggle('active');
	};

	return (
		<>
			<div className={`tit ${classes.wrapper}`} onClick={onClick} onKeyDown={() => onClick()}>
				{head.name}
				<button className={`js-depth ${classes.toggleBtn}`} type="button" onClick={onToggle}>
					더 보기
				</button>
			</div>
			<div className="depth">
				<div>
					<p>
						<strong>Epoch</strong> : {head.epochs}
					</p>
				</div>
				<div>
					<p>
						<strong>학습 정확도</strong> : {head.acc}
					</p>
				</div>
				<div>
					<p>
						<strong>학습 손실</strong> : {head.loss}
					</p>
				</div>
				<div>
					<p>
						<strong>검증 정확도</strong> : {head.valAcc}
					</p>
				</div>
				<div>
					<p>
						<strong>검증 손실</strong> : {head.valLoss}
					</p>
				</div>
				<div>
					<a href={head.resultUrl}>모델 내려받기</a>
				</div>
			</div>
		</>
	);
};

export default ProjectTrainViewerSelectorItem;
