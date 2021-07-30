import { makeStyles } from '@material-ui/core';
import NodeContainerWrapper from '../NodeSelector/nodeContainerWrapper';
import NodeConfigViewerContainer from '../NodeConfigViewer/NodeConfigViewerContainer';

const useStyle = makeStyles({
	wrapper: {
		width: 260,
		height: '100%',
	},
	nodeContainerWrapper: {
		width: '100%',
		height: '60%',
		overflow: 'auto',
	},
	nodeConfigViewer: {
		width: '100%',
		height: '40%',
		overflow: 'auto',
		backgroundColor: '#F7F7F7',
	},
});

const ProjectEditorLeftSideBar = () => {
	const classes = useStyle();
	return (
		<div className={classes.wrapper}>
			<div className={classes.nodeContainerWrapper}>
				<NodeContainerWrapper />
			</div>
			<div className={classes.nodeConfigViewer}>
				<NodeConfigViewerContainer />
			</div>
		</div>
	);
};

export default ProjectEditorLeftSideBar;
