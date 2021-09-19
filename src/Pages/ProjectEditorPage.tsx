import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { Provider } from 'react-redux';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import rootReducer from '../module';
import ProjectEditorNav from '../components/project/projectEditor/ProjectEditorNav/projectEditorNav';
import ProjectEditorMain from '../components/project/projectEditor/projectEditorMain';
import ProjectEditorGraphContainer from '../components/project/projectEditor/ProjectEditorGraphContainer';
import NodeConfigViewerContainer from '../components/project/projectEditor/NodeConfigViewer/NodeConfigViewerContainer';

const store = createStore(rootReducer, applyMiddleware(reduxThunk, reduxLogger));

export const ProjectEditorPage = () => {
	return (
		<Provider store={store}>
			<div id="container">
				<ProjectNav />
				<section className="edit">
					<ProjectEditorNav />
					<div className="sec-container">
						<ProjectEditorMain
							projectEditorGraphContainer={<ProjectEditorGraphContainer />}
							nodeConfigViewerContainer={<NodeConfigViewerContainer />}
						/>
					</div>
				</section>
			</div>
		</Provider>
	);
};
