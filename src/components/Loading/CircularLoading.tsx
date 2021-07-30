import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		wrapper: {
			width: '100%',
			height: '100%',
		},
		container: {
			width: '100%',
			height: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '5',
		},
		root: {
			display: 'flex',
			'& > * + *': {
				marginLeft: theme.spacing(2),
			},
		},
	})
);

export function CircleLoading() {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<div className={classes.root}>
					<CircularProgress />
				</div>
			</div>
		</div>
	);
}

export default React.memo(CircleLoading);
