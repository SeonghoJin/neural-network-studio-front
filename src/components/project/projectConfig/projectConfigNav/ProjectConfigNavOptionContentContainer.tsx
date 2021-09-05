import { useCallback } from 'react';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import ProjectConfigNavOptionContent from './ProjectConfigNavOptionContent';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import useUpdateProjectConfig from '../../../../hooks/useUpdateProjectConfig';

const ProjectConfigNavOptionContentContainer = () => {
	const { projectConfig } = useProjectConfig();
	const { fetch, successFeedback, loadingFeedback, errorFeedback } = useUpdateProjectConfig();
	const { projectNo } = useProjectLocation();

	const onSave = useCallback(() => {
		if (projectConfig == null) return;
		fetch(projectNo, projectConfig);
	}, [projectConfig, fetch, projectNo]);

	return (
		<>
			{errorFeedback}
			{loadingFeedback}
			{successFeedback}
			<ProjectConfigNavOptionContent onSave={onSave} />;
		</>
	);
};

export default ProjectConfigNavOptionContentContainer;
