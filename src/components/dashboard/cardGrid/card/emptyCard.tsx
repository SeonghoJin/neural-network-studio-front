import React from 'react';
import style from './card.module.css';

const EmptyCard = () => {
	return (
		<>
			<div className={`${style.card}`}>
				<header className={`${style.cardHeader}`}>
					<div className={`${style.cardTitle}`} />
				</header>
				<main className={`${style.cardMain}`}>
					<div className={`${style.descript}`}>
						<span className={`${style.descript}`} />
					</div>
					<span className={`${style.lastUpdate}`} />
				</main>
				<footer className={`${style.cardFooter}`} />
			</div>
		</>
	);
};

export default EmptyCard;
