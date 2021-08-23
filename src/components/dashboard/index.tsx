import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import CardGrid from './cardGrid/cardGrid';
import style from './index.module.css';
import utils from '../utils/index.module.css';
import PrivateAuthentication from '../../Authentication/PrivateAuthentication';

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

	return (
		<PrivateAuthentication>
			<div className={classes.wrapper}>
				<div className={classes.container}>
					<div className={`${style.mainWrapper}`}>
						<div className={`${style.dashboardMenu}`}>
							<Link to="/dashboard/projects/new" className={`${utils.divButton} ${style.createButton}`} type="button">
								프로젝트 생성
							</Link>
						</div>
						<CardGrid />
					</div>
				</div>
			</div>
		</PrivateAuthentication>
	);
};

export default DashBoard;
