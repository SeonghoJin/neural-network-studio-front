import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.css';
import { StaticPath } from '../../../pagePathName';

const Main = () => {
	return (
		<div className={`${style.mainWrapper}`}>
			<div className={`${style.serviceInfo}`}>
				<div className={`${style.serviceDescription}`}>GUI로 쉽게하는 딥러닝 통합 개발환경</div>
				<Link className={`${style.start}`} to={`${StaticPath.DASHBOARD_PROJECTS}`} type="button">
					Get Start
				</Link>
			</div>
		</div>
	);
};

export default Main;
