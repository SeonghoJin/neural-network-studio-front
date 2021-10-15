import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
});

type Props = {
	head: TrainHistory;
	onClick: () => void;
};

const ProjectTrainViewerSelectorItem = ({ head, onClick }: Props) => {
	const classes = useStyle();

	useEffect(() => {
		$('.js-depth').on('click', function (): void {
			$(this).toggleClass('active');
			$(this).parent().next().slideToggle('active');
		});
	}, []);

	return (
		<>
			<div className={`tit ${classes.wrapper}`} onClick={onClick} onKeyDown={() => onClick()}>
				{head.name}
				<div className="js-depth">
					<img src={select} alt="select" />
				</div>
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
