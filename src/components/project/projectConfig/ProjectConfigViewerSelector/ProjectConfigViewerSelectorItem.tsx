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
	onClick: () => void;
};

const ProjectConfigViewerSelectorItem = ({ head, onClick }: Props) => {
	const classes = useStyle();

	return (
		<a className={classes.wrapper} role="button" onClick={onClick} tabIndex={0} onKeyDown={() => onClick()}>
			{head}
		</a>
	);
};

export default ProjectConfigViewerSelectorItem;
