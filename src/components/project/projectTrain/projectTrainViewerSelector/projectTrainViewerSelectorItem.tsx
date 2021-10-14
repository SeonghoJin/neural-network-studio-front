import { makeStyles } from '@material-ui/core';
import React from 'react';
import { TrainHistory } from '../types';

const useStyle = makeStyles({
	wrapper: {
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
		backgroundColor: '#FFFFFF',
	},
});

type Props = {
	head: TrainHistory;
	onClick: () => void;
};

const ProjectTrainViewerSelectorItem = ({ head, onClick }: Props) => {
	const classes = useStyle();

	return (
		<>
			<button
				className={`tit js-depth ${classes.wrapper}`}
				type="button"
				onClick={onClick}
				tabIndex={0}
				onKeyDown={() => onClick()}
			>
				{head.name}
			</button>
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
			</div>
		</>
	);
};

export default ProjectTrainViewerSelectorItem;
