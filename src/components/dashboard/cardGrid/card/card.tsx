import React, { useCallback, useMemo } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { format } from 'util';
import style from './card.module.css';
import CardDropMenu from './cardDropMenu';
import { DynamicPath } from '../../../PagePathConsts';
import icoMore1 from '../../../../static/img/ico_more1.png';
import iconEdit1 from '../../../../static/img/ico_edit1.png';
import iconDelete1 from '../../../../static/img/ico_delete1.png';

type Props = {
	id: number;
	title: string;
	lastUpdate: Date;
	description: string;
	onUpdateProjectLists: any;
};

const Card = ({ id, description, title, lastUpdate, onUpdateProjectLists }: Props) => {
	const history = useHistory();

	const openProject = useCallback(() => {
		history.push(format(DynamicPath.PROJECT_FORMAT, id));
	}, [history, id]);

	return (
		<li>
			<div className="group">
				<div className="tit">{title}</div>
				<CardDropMenu projectNo={id} onUpdateProjectLists={onUpdateProjectLists} />
				<div className="content">{description}</div>
			</div>
			<button type="button" className="btn-bottom js-modal-open" onClick={openProject}>
				프로젝트 열기
			</button>
		</li>
	);
};

export default Card;
