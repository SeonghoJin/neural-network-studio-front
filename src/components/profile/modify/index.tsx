import React from 'react';
import { makeStyles } from '@material-ui/core';
import PrivateAuthentication from '../../../Authentication/PrivateAuthentication';
import Navigation from '../../nav';
import ModifyProfileMain from './main';

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

const ModifyProfile = () => {
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

export default ModifyProfile;
