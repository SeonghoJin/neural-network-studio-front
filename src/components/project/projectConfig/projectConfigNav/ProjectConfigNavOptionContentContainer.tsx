import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { putProjectConfigThunk } from '../../../../module/API/project/thunks';
import { RootDispatch } from '../../../../module';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import ProjectConfigNavOptionContent from './ProjectConfigNavOptionContent';
import useProjectLocation from '../../../../hooks/useProjectLocation';

const ProjectConfigNavOptionContentContainer = () => {
	const dispatch: RootDispatch = useDispatch();
	const { projectConfig, mutate } = useProjectConfig();
	const { projectNo } = useProjectLocation();

	const onSave = useCallback(() => {
		if (projectConfig == null) return;
		dispatch(putProjectConfigThunk(projectNo, projectConfig)).then(async (res) => {
			if (!res) return;
			mutate();
		});
	}, [projectConfig, dispatch, mutate, projectNo]);

	return <ProjectConfigNavOptionContent onSave={onSave} />;
};

export default ProjectConfigNavOptionContentContainer;
