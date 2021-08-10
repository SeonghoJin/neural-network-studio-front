import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import fileDownload from 'js-file-download';
import { FlowExportObject } from 'react-flow-renderer';
import ProjectEditorNavMainContent from './ProjectEditorNavMainContent';
import { RootState } from '../../../../module';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import useProject from '../../../../hooks/useProject';
import useUpdateProjectContent from '../../../../hooks/useUpdateProjectContent';
import usePythonCode from '../../../../hooks/usePythonCode';

const ProjectEditorNavMainContentContainer = () => {
	const { projectNo } = useProjectLocation();
	const { mutate } = useProject();
	const { fetch } = useUpdateProjectContent();
	const pythonCode = usePythonCode();
	const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
	const onGetPythonCode = useCallback(() => {
		const exec = async () => {
			await fetch(projectNo, {
				output: '',
				flowState: instance?.toObject() as FlowExportObject,
			})
				.then(async (res) => {
					if (!res) return null;
					mutate();
					await pythonCode.fetch(projectNo);
					return pythonCode.data;
				})
				.then(async (res) => {
					if (res != null) {
						fileDownload(res, 'model.py');
					}
				});
		};
		exec();
	}, [fetch, instance, mutate, projectNo, pythonCode]);

	return <ProjectEditorNavMainContent onGetPythonCode={onGetPythonCode} />;
};

export default ProjectEditorNavMainContentContainer;
