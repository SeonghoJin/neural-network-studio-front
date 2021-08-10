import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useProjectLocation from '../../../hooks/useProjectLocation';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const Logo = () => {
	const classes = useStyle();
	const { projectNo } = useProjectLocation();
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<Link to={`/project/${projectNo}`}>
					<div>Neural Network Studio</div>
				</Link>
			</div>
		</div>
	);
};

export default Logo;
