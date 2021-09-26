import { makeStyles } from '@material-ui/core';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from '../module';
import ProjectEditorMain from '../components/project/projectEditor/projectEditorMain';
import EditorShareNavigation from '../components/nav/EditorShareNavigation';
import { ProjectEditorShareNav } from '../components/nav/ProjectEditorShareNav';
import ProjectEditorShareGraphContainer from '../components/project/ProjectShare/ProjectEditorShareGraphContainer';
import NodeConfigShareViewerContainer from '../components/project/ProjectShare/NodeConfigShareViewer';
import ProjectEditorShareMain from '../components/project/ProjectShare/ProjectEditorShareMain';

const store = createStore(rootReducer, applyMiddleware(reduxThunk, reduxLogger));

export const ProjectSharePage = () => {
	return (
		<Provider store={store}>
			<div id="container">
				<EditorShareNavigation />
				<section className="edit">
					<ProjectEditorShareNav />
					<div className="sec-container">
						<ProjectEditorShareMain
							projectEditorGraphContainer={<ProjectEditorShareGraphContainer />}
							nodeConfigViewerContainer={<NodeConfigShareViewerContainer />}
						/>
					</div>
				</section>
			</div>
		</Provider>
	);
};
