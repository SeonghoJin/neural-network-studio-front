import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Skeleton } from '@material-ui/lab';
import ProjectNav from '../components/project/ProjectNav/projectNav';
import rootReducer from '../module';
import ProjectEditorNav from '../components/project/projectEditor/ProjectEditorNav/projectEditorNav';
import ProjectEditorMain from '../components/project/projectEditor/projectEditorMain';
import ProjectEditorGraphContainer from '../components/project/projectEditor/ProjectEditorGraphContainer';
import NodeConfigViewerContainer from '../components/project/projectEditor/NodeConfigViewer/NodeConfigViewerContainer';
import usePythonCode from '../hooks/usePythonCode';
import useUpdateProjectContent from '../hooks/useUpdateProjectContent';
import { useCursorTracker } from '../components/CursorTracker/useCursorTracker';

const store = createStore(rootReducer);

export const ProjectEditorPage = () => {
	const pythonCodeResult = usePythonCode();
	const _updateProjectContent = useUpdateProjectContent();
	const { cursorPosition } = useCursorTracker();
	return (
		<Provider store={store}>
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

			<div id="container">
				{pythonCodeResult.loading && pythonCodeResult.loadingFallback}
				{_updateProjectContent.loading && _updateProjectContent.loadingFallback}
				<ProjectNav currentMenu={1} />
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
