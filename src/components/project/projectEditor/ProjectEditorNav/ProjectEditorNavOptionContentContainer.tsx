import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FlowExportObject } from 'react-flow-nns';
import { useSnackbar } from 'notistack';
import ProjectEditorNavOptionContent from './ProjectEditorNavOptionContent';
import { RootState } from '../../../../module';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import useUpdateProjectContent from '../../../../hooks/useUpdateProjectContent';
import useRoom from '../../../../hooks/useRoom';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';

const ProjectEditorNavOptionContentContainer = () => {
	const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
	const { projectNo } = useProjectLocation();
	const { data: roomNo } = useRoom();
	const result = useUpdateProjectContent();
	const { enqueueSnackbar } = useSnackbar();
	const onSave = useCallback(() => {
		result
			.fetch(projectNo, {
				output: '',
				flowState: instance?.toObject() as FlowExportObject,
			})
			.then(() => {
				enqueueSnackbar('저장되었습니다.', { variant: 'success' });
			})
			.catch((err) => {
				enqueueSnackbar(err.message, { variant: 'error' });
			});
	}, [result, projectNo, instance, enqueueSnackbar]);

	return (
		<>
			{(roomNo && <ProjectEditorNavOptionContent onSave={onSave} roomNo={roomNo} projectNo={projectNo} />) || (
				<CircleLoading />
			)}
		</>
	);
};

export default ProjectEditorNavOptionContentContainer;
