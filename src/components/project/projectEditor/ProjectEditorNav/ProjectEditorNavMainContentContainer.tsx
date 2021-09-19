import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import fileDownload from 'js-file-download';
import { FlowExportObject } from 'react-flow-nns';
import ProjectEditorNavMainContent from './ProjectEditorNavMainContent';
import { RootState } from '../../../../module';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import usePythonCode from '../../../../hooks/usePythonCode';

const ProjectEditorNavMainContentContainer = () => {
	const { projectNo } = useProjectLocation();
	const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
	const { fetch, errorFeedback, successFeedback, loadingFeedback } = usePythonCode();
	const onGetPythonCode = useCallback(() => {
		(async () => {
			await fetch(projectNo, {
				output: '',
				flowState: instance?.toObject() as FlowExportObject,
			}).then(async (res) => {
				if (res != null) {
					fileDownload(res, 'model.py');
				}
			});
		})();
	}, [fetch, instance, projectNo]);

	return (
		<>
			{errorFeedback}
			{loadingFeedback}
			{successFeedback}
			<ProjectEditorNavMainContent onGetPythonCode={onGetPythonCode} />
		</>
	);
};

export default ProjectEditorNavMainContentContainer;
