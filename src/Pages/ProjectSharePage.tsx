import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Skeleton } from '@material-ui/lab';
import rootReducer from '../module';
import EditorShareNavigation from '../components/nav/EditorShareNavigation';
import { ProjectEditorShareNav } from '../components/nav/ProjectEditorShareNav';
import ProjectEditorShareGraphContainer from '../components/project/ProjectShare/ProjectEditorShareGraphContainer';
import NodeConfigShareViewerContainer from '../components/project/ProjectShare/NodeConfigShareViewer';
import ProjectEditorShareMain from '../components/project/ProjectShare/ProjectEditorShareMain';
import useUpdateProjectContent from '../hooks/useUpdateProjectContent';
import { VisitAlarmModule } from '../components/project/ProjectShare/VisitAlarmModule';
import { useCursorTracker } from '../components/CursorTracker/useCursorTracker';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export const ProjectSharePage = () => {
	const updateProjectContent = useUpdateProjectContent();
	const { cursorPosition } = useCursorTracker();
	return (
		<Provider store={store}>
			<div id="container">
				<div
					style={{
						position: 'absolute',
						top: (cursorPosition?.y || -100) + 20,
						left: (cursorPosition?.x || -100) + 20,
						zIndex: 5,
						visibility: (!cursorPosition && 'hidden') || 'visible',
					}}
				>
					<Skeleton animation={false} width={130} height={70} />
				</div>
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
