import { Container, makeStyles } from '@material-ui/core';
import { ReactFlowProvider } from 'react-flow-renderer';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import ProjectEditorLeftSideBar from './projectEditorSideBar/ProjectEditorLeftSideBar';
import ProjectEditorGraphContainer from './ProjectEditorGraphContainer';
import 'react-reflex/styles.css';

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

const ProjectEditorMain = () => {
	const classes = useStyle();
	return (
		<>
			<div className={classes.wrapper}>
				<ReactFlowProvider>
					<Container className={classes.container}>
						<ReflexContainer orientation="vertical">
							<ReflexElement minSize={150} maxSize={350} size={260} className="left-pane">
								<ProjectEditorLeftSideBar />
							</ReflexElement>
							<ReflexSplitter />
							<ReflexElement className="right-pane">
								<div className={classes.contentWrapper}>
									<ProjectEditorGraphContainer />
								</div>
							</ReflexElement>
						</ReflexContainer>
					</Container>
				</ReactFlowProvider>
			</div>
		</>
	);
};

export default ProjectEditorMain;
