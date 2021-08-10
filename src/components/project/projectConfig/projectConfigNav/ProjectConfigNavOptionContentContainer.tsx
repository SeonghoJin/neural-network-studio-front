import { useCallback } from 'react';
import { Backdrop } from '@material-ui/core';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import ProjectConfigNavOptionContent from './ProjectConfigNavOptionContent';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import useUpdateProjectConfig from '../../../../hooks/useUpdateProjectConfig';
import StandardModal from '../../../utils/modal/StandardModal';

const ProjectConfigNavOptionContentContainer = () => {
	const { projectConfig, mutate } = useProjectConfig();
	const { fetch, loading, data } = useUpdateProjectConfig();
	const { projectNo } = useProjectLocation();

	const onSave = useCallback(() => {
		if (projectConfig == null) return;
		fetch(projectNo, projectConfig).then((res) => {
			if (!res) return;
			mutate();
		});
	}, [projectConfig, fetch, projectNo, mutate]);

	return (
		<>
			{loading && <Backdrop open={loading} />}
			{data && <StandardModal head="저장이 완료되었습니다." body="" />}
			<ProjectConfigNavOptionContent onSave={onSave} />;
		</>
	);
};

export default ProjectConfigNavOptionContentContainer;
