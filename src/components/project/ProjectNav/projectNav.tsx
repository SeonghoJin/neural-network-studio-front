import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import Logo from '../../Logo/Logo';
import ProjectNavMainContent from './ProjectNavMainContent';
import ProjectNavOptionContent from './ProjectNavOptionContent';

const useStyled = makeStyles({
	wrapper: {
		width: '100%',
		height: '40px',
	},
	container: {
		width: '100%',
		height: '100%',
	},
	contentWrapper: {
		width: '100%',
		height: '100%',
		borderBottom: '1px solid #B2B2B2',
		display: 'flex',
		backgroundColor: '#00000000',
	},
	logoWrapper: {
		width: 260,
		height: '100%',
	},
	navContentWrapper: {
		flexGrow: 1,
		height: '100%',
	},
	navContent: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'space-between',
	},
	navMainContentWrapper: {
		height: '100%',
	},
	navOptionContentWrapper: {
		height: '100%',
	},
});

const ProjectNav = () => {
	const classes = useStyled();
	return (
		<div className={classes.wrapper}>
			<Container className={classes.container}>
				<div className={classes.contentWrapper}>
					<div className={classes.logoWrapper}>
						<Logo />
					</div>
					<div className={classes.navContentWrapper}>
						<div className={classes.navContent}>
							<div className={classes.navMainContentWrapper}>
								<ProjectNavMainContent />
							</div>
							<div className={classes.navOptionContentWrapper}>
								<ProjectNavOptionContent />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default ProjectNav;
