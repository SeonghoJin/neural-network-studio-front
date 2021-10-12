import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import fileDownload from 'js-file-download';
import { FlowExportObject } from 'react-flow-nns';
import { useSnackbar } from 'notistack';
import ProjectEditorNavMainContent from './ProjectEditorNavMainContent';
import { RootState } from '../../../../module';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import usePythonCode from '../../../../hooks/usePythonCode';

const ProjectEditorNavMainContentContainer = () => {
	const { projectNo } = useProjectLocation();
	const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
	const { fetch } = usePythonCode();
	const { enqueueSnackbar } = useSnackbar();
	const onGetPythonCode = useCallback(() => {
		(async () => {
			await fetch(projectNo, {
				output: '',
				flowState: instance?.toObject() as FlowExportObject,
			})
				.then(async (res) => {
					if (res != null) {
						fileDownload(res, 'model.py');
						enqueueSnackbar('파이썬 코드를 다운받아주세요.', {
							variant: 'success',
						});
					} else {
						throw new Error('파이썬 코드를 다운받는데 실패했습니다. 다시 시도 해주세요.');
					}
				})
				.catch((err) => {
					enqueueSnackbar(err.message, { variant: 'error' });
				});
		})();
	}, [enqueueSnackbar, fetch, instance, projectNo]);

	return (
		<>
			<ProjectEditorNavMainContent onGetPythonCode={onGetPythonCode} />
		</>
	);
};

export default ProjectEditorNavMainContentContainer;
