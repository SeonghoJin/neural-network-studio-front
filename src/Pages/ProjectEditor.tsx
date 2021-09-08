import { makeStyles } from '@material-ui/core';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { Provider } from 'react-redux';
import ProjectEditorMain from '../components/project/projectEditor/projectEditorMain';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import ProjectEditorNav from '../components/project/projectEditor/ProjectEditorNav/projectEditorNav';
import rootReducer from '../module';
import ProjectEditorGraphContainer from '../components/project/projectEditor/ProjectEditorGraphContainer';
import ProjectEditorNavOptionContentContainer from '../components/project/projectEditor/ProjectEditorNav/ProjectEditorNavOptionContentContainer';
import NodeConfigViewerContainer from '../components/project/projectEditor/NodeConfigViewer/NodeConfigViewerContainer';

const useStyle = makeStyles({
	wrapper: {
		width: '100vw',
		height: '100vh',
	},
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flexGrow: 1,
	},
});
const store = createStore(rootReducer, applyMiddleware(reduxThunk, reduxLogger));

const ProjectEditor = () => {
	const classes = useStyle();

	return (
		<Provider store={store}>
			<div className={classes.wrapper}>
				<div className={classes.container}>
					<ProjectNav />
					<ProjectEditorNav projectEditorNavOptionContent={<ProjectEditorNavOptionContentContainer />} />
					<div className={classes.content}>
						<ProjectEditorMain
							nodeConfigViewerContainer={<NodeConfigViewerContainer />}
							projectEditorGraphContainer={<ProjectEditorGraphContainer />}
						/>
					</div>
				</div>
			</div>
		</Provider>
	);
};

export default ProjectEditor;
