import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100px',
	},
	container: {
		width: '100%',
		height: '100%',
		padding: '10px',
		borderBottom: '1px solid #B2B2B2',
		'&:hover': {
			backgroundColor: '#FFFFFF',
		},
	},
	active: {
		width: '100%',
		height: '100%',
		backgroundColor: '#FFFFFF',
	},
});

type Props = {
	head: string;
	active: boolean;
	onClick?: () => void;
};

const ProjectConfigViewerSelectorItem = ({ head, onClick, active }: Props) => {
	const classes = useStyle();

	return (
		<div className={classes.wrapper} onClick={onClick}>
			<div className={`${classes.container} ${active && classes.active}`}>{head}</div>
		</div>
	);
};

export default ProjectConfigViewerSelectorItem;
