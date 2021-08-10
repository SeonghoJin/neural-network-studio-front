import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import fileDownload from 'js-file-download';
import { FlowExportObject } from 'react-flow-renderer';
import ProjectEditorNavMainContent from './ProjectEditorNavMainContent';
import { getPythonCodeThunk } from '../../../../module/API/project/thunks';
import { RootDispatch, RootState } from '../../../../module';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import useProjectResult from '../../../../hooks/useProjectResult';
import useUpdateProjectContent from '../../../../hooks/useUpdateProjectContent';

const ProjectEditorNavMainContentContainer = () => {
	const { projectNo } = useProjectLocation();
	const { mutate } = useProjectResult();
	const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
	const { fetch } = useUpdateProjectContent();
	const thunkDispatch: RootDispatch = useDispatch();
	const onGetPythonCode = useCallback(() => {
		const exec = async () => {
			await fetch(projectNo, {
				output: '',
				flowState: instance?.toObject() as FlowExportObject,
			})
				.then(async (res) => {
					if (res) {
						await mutate();
						const result = await thunkDispatch(getPythonCodeThunk(projectNo));
						return result;
					}
					return null;
				})
				.then(async (res) => {
					if (res != null) {
						fileDownload(res, 'model.py');
					}
				});
		};
		exec();
	}, [fetch, instance, mutate, projectNo, thunkDispatch]);

	return <ProjectEditorNavMainContent onGetPythonCode={onGetPythonCode} />;
};

export default ProjectEditorNavMainContentContainer;
