import { makeStyles } from '@material-ui/core';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from '../module';
import EditorShareNavigation from '../components/nav/EditorShareNavigation';
import { ProjectEditorShareNav } from '../components/nav/ProjectEditorShareNav';
import ProjectEditorShareGraphContainer from '../components/project/ProjectShare/ProjectEditorShareGraphContainer';
import NodeConfigShareViewerContainer from '../components/project/ProjectShare/NodeConfigShareViewer';
import ProjectEditorShareMain from '../components/project/ProjectShare/ProjectEditorShareMain';
import useUpdateProjectContent from '../hooks/useUpdateProjectContent';
import { VisitAlarmModule } from '../components/project/ProjectShare/VisitAlarmModule';

const store = createStore(rootReducer, applyMiddleware(reduxThunk, reduxLogger));

export const ProjectSharePage = () => {
	const updateProjectContent = useUpdateProjectContent();
	return (
		<Provider store={store}>
			<div id="container">
				<VisitAlarmModule />
				{updateProjectContent.loading && updateProjectContent.loadingFallback}
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
