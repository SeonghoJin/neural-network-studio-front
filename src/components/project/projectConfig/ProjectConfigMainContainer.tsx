import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ProjectConfigMain from './projectConfigMain';
import useGetProjectConfigResult from '../../../hooks/APIResult/useGetProjectConfigResult';
import { setProjectConfig } from '../../../module/projectConfig';
import { getProjectConfigThunk } from '../../../module/API/project/thunks';
import useProjectLocation from '../../../hooks/useProjectLocation';

const ProjectConfigMainContainer = () => {
	const dispatch = useDispatch();
	const projectConfigResult = useGetProjectConfigResult();
	const { projectNo } = useProjectLocation();

	useEffect(() => {
		if (projectConfigResult.data != null) {
			dispatch(setProjectConfig(projectConfigResult.data));
		}
	}, [dispatch, projectConfigResult.data]);

	useEffect(() => {
		dispatch(getProjectConfigThunk(projectNo));
	}, [dispatch, projectNo]);

	return <ProjectConfigMain />;
};

export default ProjectConfigMainContainer;
