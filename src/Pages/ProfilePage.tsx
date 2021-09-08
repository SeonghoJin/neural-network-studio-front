import { makeStyles } from '@material-ui/core';
import React from 'react';
import PrivateAuthentication from '../Authentication/PrivateAuthentication';
import Navigation from '../components/nav';
import ProfileMain from '../components/profile/default/main';

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

const Profile = () => {
	const classes = useStyle();
	return (
		<PrivateAuthentication>
			<Navigation />
			<div className={classes.wrapper}>
				<div className={classes.container}>
					<ProfileMain />
				</div>
			</div>
		</PrivateAuthentication>
	);
};

export default Profile;
