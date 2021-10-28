import { useCallback, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import ProjectDatasetNavOptionContent from './ProjectDatasetNavOptionContent';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import { useUpdateDatasetConfig } from '../apis';
import { DatasetConfig } from '../types';

type Props = {
	currentDatasetConfig: undefined | DatasetConfig;
};

const ProjectDatasetNavOptionContentContainer = ({ currentDatasetConfig }: Props) => {
	const { fetch } = useUpdateDatasetConfig();
	const { enqueueSnackbar } = useSnackbar();
	const { projectNo } = useProjectLocation();
	const onSave = useCallback(() => {
		// if (value == null) {
		// 	enqueueSnackbar('데이터셋 설정이 없습니다.', {
		// 		variant: 'error',
		// 	});
		//
		// 	return;
		// }
		// fetch(projectNo, value)
		// 	.then(() => {
		// 		enqueueSnackbar('저장되었습니다.', {
		// 			variant: 'success',
		// 		});
		// 	})
		// 	.catch(() => {
		// 		enqueueSnackbar('저장에 실패했습니다. 다시 시도해주세요.', {
		// 			variant: 'error',
		// 		});
		// 	});
	}, []);

	return <ProjectDatasetNavOptionContent onSave={onSave} />;
};

export default ProjectDatasetNavOptionContentContainer;
