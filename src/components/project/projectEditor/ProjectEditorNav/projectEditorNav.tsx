import { Container, makeStyles } from '@material-ui/core';

import React from 'react';
import useGetProjectResult from '../../../../hooks/APIResult/project/useGetProjectResult';
import CircleLoading from '../../../utils/Loading/CircularLoading';
import ProjectEditorNavMainContentContainer from './ProjectEditorNavMainContentContainer';
import ProjectEditorNavOptionContentContainer from './ProjectEditorNavOptionContentContainer';

const useStyle = makeStyles({
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
		backgroundColor: '#F7F7F7',
	},
	logo: {
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
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

const ProjectEditorNav = () => {
	const classes = useStyle();
	const { error, data } = useGetProjectResult();
	const content = (
		<div className={classes.contentWrapper}>
			<div className={classes.logoWrapper}>
				<div className={classes.logo}>편집</div>
			</div>
			<div className={classes.navContentWrapper}>
				<div className={classes.navContent}>
					<div className={classes.navMainContentWrapper}>
						<ProjectEditorNavMainContentContainer />
					</div>
					<div className={classes.navOptionContentWrapper}>
						<ProjectEditorNavOptionContentContainer />
					</div>
				</div>
			</div>
		</div>
	);
	return (
		<div className={classes.wrapper}>
			<Container className={classes.container}>{!error && !data ? <CircleLoading /> : content}</Container>
		</div>
	);
};

export default ProjectEditorNav;
