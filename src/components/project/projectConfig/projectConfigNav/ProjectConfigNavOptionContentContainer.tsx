import { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import useProjectConfig from '../../../../hooks/useProjectConfig';
import ProjectConfigNavOptionContent from './ProjectConfigNavOptionContent';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import useUpdateProjectConfig from '../../../../hooks/useUpdateProjectConfig';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';

const ProjectConfigNavOptionContentContainer = () => {
	const { projectConfig } = useProjectConfig();
	const { fetch } = useUpdateProjectConfig();
	const { projectNo } = useProjectLocation();
	const { enqueueSnackbar } = useSnackbar();
	const onSave = useCallback(() => {
		if (projectConfig == null) {
			enqueueSnackbar('모델 설정이 없습니다.', {
				variant: 'error',
			});
			return;
		}
		fetch(projectNo, projectConfig)
			.then(() => {
				enqueueSnackbar('저장되었습니다.', {
					variant: 'success',
				});
			})
			.catch(() => {
				enqueueSnackbar('저장에 실패했습니다. 다시 시도해주세요.', {
					variant: 'error',
				});
			});
	}, [projectConfig, fetch, projectNo, enqueueSnackbar]);

	return <>{(projectConfig && <ProjectConfigNavOptionContent onSave={onSave} />) || <CircleLoading />}</>;
};

export default ProjectConfigNavOptionContentContainer;
