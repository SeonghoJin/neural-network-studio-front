import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FlowExportObject } from 'react-flow-nns';
import { useSnackbar } from 'notistack';
import { RootState } from '../../../../module';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import useUpdateProjectContent from '../../../../hooks/useUpdateProjectContent';
import ProjectShareNavOptionContent from './ProjectShareNavOptionContent';

const ProjectShareNavOptionContentContainer = () => {
	const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
	const { projectNo } = useProjectLocation();
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

	return <ProjectShareNavOptionContent onSave={onSave} />;
};

export default ProjectShareNavOptionContentContainer;
