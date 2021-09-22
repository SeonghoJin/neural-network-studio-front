import { makeStyles } from '@material-ui/core';
import { ReactFlowProvider } from 'react-flow-nns';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css';
import { ProjectEditorRightSidebarContainer } from './ProjectEditorRightSidebar/ProjectEditorRightSidebarContainer';
import ProjectEditorLeftSideBar from '../projectEditor/projectEditorSideBar/ProjectEditorLeftSideBar';

const useStyle = makeStyles({
	wrapper: {
		width: '100%',
		height: '100%',
	},
	container: {
		height: '100%',
		display: 'flex',
	},
	contentWrapper: {
		width: '100%',
		height: '100%',
	},
});

type Props = {
	projectEditorGraphContainer: any;
	nodeConfigViewerContainer: any;
};

const ProjectEditorShareMain = ({ projectEditorGraphContainer, nodeConfigViewerContainer }: Props) => {
	const classes = useStyle();
	return (
		<>
			<ReactFlowProvider>
				<ReflexContainer orientation="vertical">
					<ReflexElement minSize={150} maxSize={350} size={260} className="left-pane">
						<ProjectEditorLeftSideBar nodeConfigViewer={nodeConfigViewerContainer} />
					</ReflexElement>
					<ReflexSplitter />
					<ReflexElement className="middle-pane">
						<div className={classes.contentWrapper}>{projectEditorGraphContainer}</div>
					</ReflexElement>
					<ReflexSplitter />
					<ReflexElement minSize={150} maxSize={350} size={260} className="right-pane">
						<ProjectEditorRightSidebarContainer />
					</ReflexElement>
				</ReflexContainer>
			</ReactFlowProvider>
		</>
	);
};

export default ProjectEditorShareMain;
