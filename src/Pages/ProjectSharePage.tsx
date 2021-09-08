import { makeStyles } from '@material-ui/core';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from '../module';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import ProjectEditorNav from '../components/project/projectEditor/ProjectEditorNav/projectEditorNav';
import ProjectShareNavOptionContentContainer from '../components/project/ProjectShare/ProjectShareNav/ProjectShareNavOptionContentContainer';
import ProjectEditorMain from '../components/project/projectEditor/projectEditorMain';
import NodeConfigShareViewerContainer from '../components/project/ProjectShare/NodeConfigShareViewer';
import ProjectEditorShareGraphContainer from '../components/project/ProjectShare/ProjectEditorShareGraphContainer';

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

export const ProjectSharePage = () => {
	const classes = useStyle();
	return (
		<Provider store={store}>
			<div className={classes.wrapper}>
				<div className={classes.container}>
					<ProjectNav />
					<ProjectEditorNav projectEditorNavOptionContent={<ProjectShareNavOptionContentContainer />} />
					<div className={classes.content}>
						<ProjectEditorMain
							nodeConfigViewerContainer={<NodeConfigShareViewerContainer />}
							projectEditorGraphContainer={<ProjectEditorShareGraphContainer />}
						/>
					</div>
				</div>
			</div>
		</Provider>
	);
};
