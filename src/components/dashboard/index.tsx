import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import CardGrid from './cardGrid/cardGrid';
import Header from '../header/header';
import style from './index.module.css';
import utils from '../utils/index.module.css';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
	},
	container: {
		width: '1440px',
		height: '100%',
	},
});

const DashBoard = () => {
	const classes = useStyle();

	const newProject = () => {
		window.location.href = '/newProject';
	};

	return (
		<>
			<Header />
			<div className={classes.wrapper}>
				<div className={classes.container}>
					<div className={`${style.mainWrapper}`}>
						<div className={`${style.dashboardMenu}`}>
							<button className={`${utils.divButton} ${style.createButton}`} type="button" onClick={newProject}>
								프로젝트 생성
							</button>
						</div>
						<CardGrid />
					</div>
				</div>
			</div>
		</>
	);
};

export default DashBoard;
