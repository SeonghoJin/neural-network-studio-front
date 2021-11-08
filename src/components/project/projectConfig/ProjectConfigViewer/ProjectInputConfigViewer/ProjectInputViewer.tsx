import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
	container: {
		width: '100%',
		height: '100%',
		padding: 10,
	},
});

const InputViewer = () => {
	const classes = useStyle();
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
			</div>
		</div>
	);
};

export default InputViewer;
