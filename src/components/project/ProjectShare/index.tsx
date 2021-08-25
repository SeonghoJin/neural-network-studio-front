import { makeStyles } from '@material-ui/core';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { Provider } from 'react-redux';
import PrivateAuthentication from '../../../Authentication/PrivateAuthentication';
import ProjectNav from '../ProjectNav/projectNav';
import ProjectEditorNav from '../projectEditor/ProjectEditorNav/projectEditorNav';
import ProjectEditorMain from '../projectEditor/projectEditorMain';
import rootReducer from '../../../module';
import ProjectEditorShareGraphContainer from './ProjectEditorShareGraphContainer';
import { SocketIOProvider } from '../../../core/Socket/Context/SocketIOProvider';

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

const ProjectShare = () => {
	const classes = useStyle();
	return (
		<PrivateAuthentication>
			<Provider store={store}>
				<SocketIOProvider>
					<div className={classes.wrapper}>
						<div className={classes.container}>
							<ProjectNav />
							<ProjectEditorNav />
							<div className={classes.content}>
								<ProjectEditorMain projectEditorGraphContainer={<ProjectEditorShareGraphContainer />} />
							</div>
						</div>
					</div>
				</SocketIOProvider>
			</Provider>
		</PrivateAuthentication>
	);
};

export default ProjectShare;
