import React, { useCallback, useMemo } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { format } from 'util';
import style from './card.module.css';
import CardDropMenu from './cardDropMenu';
import { DynamicPath } from '../../../PagePathConsts';

type Props = {
	id: number;
	title: string;
	lastUpdate: Date;
	description: string;
};

const Card = ({ id, description, title, lastUpdate }: Props) => {
	const history = useHistory();

	const openProject = useCallback(() => {
		history.push(format(DynamicPath.PROJECT_FORMAT, id));
	}, [history, id]);

	const update = useMemo(() => moment(lastUpdate).format('YYYY년 MM월 DD일 HH:mm:ss'), [lastUpdate]);

	return (
		<>
			<div className={`${style.card}`}>
				<header className={`${style.cardHeader}`}>
					<div className={`${style.cardTitle}`}>
						<h4>{title}</h4>
					</div>
					<CardDropMenu projectNo={id} />
				</header>
				<main className={`${style.cardMain}`}>
					<div className={`${style.descript}`}>
						<span className={`${style.descript}`}>{description}</span>
					</div>
					<span className={`${style.lastUpdate}`}>마지막 수정 : {update}</span>
				</main>
				<footer className={`${style.cardFooter}`}>
					<button type="button" className={style.startButton} onClick={openProject}>
						프로젝트 열기
					</button>
				</footer>
			</div>
		</>
	);
};

export default Card;
