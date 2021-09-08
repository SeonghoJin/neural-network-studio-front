import { Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import PrivateAuthentication from '../Authentication/PrivateAuthentication';
import style from '../components/dashboard/index.module.css';
import utils from '../components/utils/index.module.css';
import CardGrid from '../components/dashboard/cardGrid/cardGrid';
import { StaticPath } from '../pagePathName';

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
							<Link
								to={`${StaticPath.DASHBOARD_NEW_PROJECT}`}
								className={`${utils.divButton} ${style.createButton}`}
								type="button"
							>
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
