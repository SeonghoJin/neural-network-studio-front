import { makeStyles } from '@material-ui/core';
import ProjectConfigViewerSelector from '../ProjectConfigViewerSelector/ProjectConfigViewerSelector';
import selectorItemHeads from '../index';

const useStyle = makeStyles({
	wrapper: {
		width: 260,
		height: '100%',
	},
	container: {
		width: '100%',
		height: '100%',
		overflow: 'auto',
		backgroundColor: '#F7F7F7',
	},
});

type Props = {
	value: keyof typeof selectorItemHeads;
	setValue: (num: keyof typeof selectorItemHeads) => void;
};

const ProjectConfigSideBar = ({ value, setValue }: Props) => {
	const classes = useStyle();

	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<ProjectConfigViewerSelector value={value} setValue={setValue} />
			</div>
		</div>
	);
};

export default ProjectConfigSideBar;
