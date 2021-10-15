import { useCallback } from 'react';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';
import ProjectDatasetNavOptionContent from './ProjectDatasetNavOptionContent';

const ProjectDatasetNavOptionContentContainer = () => {
	const onSave = useCallback(() => {
		console.log('Add Update dataset config api fetcher');
	}, []);

	return <>{<ProjectDatasetNavOptionContent onSave={onSave} /> || <CircleLoading />}</>;
};

export default ProjectDatasetNavOptionContentContainer;
