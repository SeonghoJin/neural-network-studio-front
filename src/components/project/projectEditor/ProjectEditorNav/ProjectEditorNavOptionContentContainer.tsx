import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectEditorNavOptionContent from './ProjectEditorNavOptionContent';
import { updateProjectContentThunk } from '../../../../module/API/project/thunks';
import { RootDispatch, RootState } from '../../../../module';
import useGetProjectResult from '../../../../hooks/APIResult/project/useGetProjectResult';
import useProjectLocation from '../../../../hooks/useProjectLocation';

const ProjectEditorNavOptionContentContainer = () => {
	const dispatch: RootDispatch = useDispatch();
	const instance = useSelector((state: RootState) => state.reactFlowInstance.instance);
	const { data, mutate } = useGetProjectResult();
	const { projectNo } = useProjectLocation();
	const onSave = useCallback(() => {
		dispatch(updateProjectContentThunk(projectNo, '', instance?.toObject() || data?.content.flowState)).then(
			async (res) => {
				if (!res) return;
				mutate();
			}
		);
	}, [dispatch, projectNo, instance, data?.content.flowState, mutate]);

	return <ProjectEditorNavOptionContent onSave={onSave} />;
};

export default ProjectEditorNavOptionContentContainer;
