import { makeStyles } from '@material-ui/core';
import React from 'react';
import PrivateAuthentication from '../components/Authentication/PrivateAuthentication';
import Navigation from '../components/nav';
import ModifyProfileMain from '../components/profile/modify/main';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
	},
});

export const ModifyProfile = () => {
	const classes = useStyle();
	return (
		<PrivateAuthentication>
			<Navigation />
			<div className={classes.wrapper}>
				<div className={classes.container}>
					<ModifyProfileMain />
				</div>
			</div>
		</PrivateAuthentication>
	);
};
