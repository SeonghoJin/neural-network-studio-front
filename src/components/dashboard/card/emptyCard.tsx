import React from 'react';
import style from './card.module.css';
import { CircleLoading } from '../../utils/Loading/CircularLoading';

const EmptyCard = () => {
	return (
		<>
			<div className={`${style.emptyCard} ${style.card}`}>
				<CircleLoading />
			</div>
		</>
	);
};

export default EmptyCard;
