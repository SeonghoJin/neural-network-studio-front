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
import usePythonCode from '../hooks/usePythonCode';
import useUpdateProjectContent from '../hooks/useUpdateProjectContent';

const store = createStore(rootReducer, applyMiddleware(reduxThunk, reduxLogger));

export const ProjectEditorPage = () => {
	const pythonCodeResult = usePythonCode();
	const updateProjectContent = useUpdateProjectContent();
	return (
		<Provider store={store}>
			<div id="container">
				{pythonCodeResult.loading && pythonCodeResult.loadingFallback}
				{updateProjectContent.loading && updateProjectContent.loadingFallback}
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
