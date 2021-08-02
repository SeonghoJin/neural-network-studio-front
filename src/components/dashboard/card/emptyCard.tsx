import React from 'react';
import style from './card.module.css';
import { CircleLoading } from '../../utils/Loading/CircularLoading';

const EmptyCard = () => {
	return (
		<>
			<div className={`${style.card}`}>
				<header className={`${style.cardHeader}`}>
					<div className={`${style.cardTitle}`} />
				</header>
				<main className={`${style.cardMain}`}>
					<CircleLoading />
				</main>
				<footer className={`${style.cardFooter}`} />
			</div>
		</>
	);
};

export default EmptyCard;
