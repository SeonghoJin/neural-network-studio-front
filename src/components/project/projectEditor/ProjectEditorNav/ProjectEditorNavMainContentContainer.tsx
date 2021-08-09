import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import fileDownload from 'js-file-download';
import ProjectEditorNavMainContent from './ProjectEditorNavMainContent';
import { getPythonCodeThunk, updateProjectContentThunk } from '../../../../module/API/project/thunks';
import { RootDispatch, RootState } from '../../../../module';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import useGetProjectResult from '../../../../hooks/APIResult/project/useGetProjectResult';

const ProjectEditorNavMainContentContainer = () => {
	const { projectNo } = useProjectLocation();
	const { mutate } = useGetProjectResult();
	const thunkDispatch: RootDispatch = useDispatch();
	const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);

	const onGetPythonCode = useCallback(() => {
		const exec = async () => {
			await thunkDispatch(updateProjectContentThunk(projectNo, '', instance?.toObject()))
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
	}, [instance, mutate, projectNo, thunkDispatch]);

	return <ProjectEditorNavMainContent onGetPythonCode={onGetPythonCode} />;
};

export default ProjectEditorNavMainContentContainer;
