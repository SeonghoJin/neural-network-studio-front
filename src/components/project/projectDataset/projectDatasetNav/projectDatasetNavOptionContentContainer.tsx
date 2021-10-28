import { useCallback, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import ProjectDatasetNavOptionContent from './ProjectDatasetNavOptionContent';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import { useUpdateDatasetConfig } from '../apis';
import { DatasetConfig } from '../types';
import { useAddDatasetConfig } from '../../../../hooks/useAddDatasetConfig';

type Props = {
	currentDatasetConfig: undefined | DatasetConfig;
	mutate: any;
};

const ProjectDatasetNavOptionContentContainer = ({ currentDatasetConfig, mutate }: Props) => {
	const updateDatasetConfig = useUpdateDatasetConfig();
	const addDatasetConfig = useAddDatasetConfig();
	const { enqueueSnackbar } = useSnackbar();
	const { projectNo } = useProjectLocation();
	const onSave = useCallback(async () => {
		console.log(currentDatasetConfig);
		if (currentDatasetConfig == null) {
			enqueueSnackbar('데이터셋 설정이 없습니다.', {
				variant: 'error',
			});
			return;
		}

		if (currentDatasetConfig.id === -1) {
			await addDatasetConfig
				.fetch(projectNo, currentDatasetConfig)
				.then((res) => {
					console.log(res);
				})
				.catch((e) => {
					enqueueSnackbar(e.message, {
						variant: 'error',
					});
				});
		} else {
			await updateDatasetConfig
				.fetch(projectNo, currentDatasetConfig)
				.then(() => {
					enqueueSnackbar('저장되었습니다.', {
						variant: 'success',
					});
				})
				.catch((e) => {
					enqueueSnackbar('저장에 실패했습니다. 다시 시도해주세요.', {
						variant: 'error',
					});
				});
		}
		mutate();
	}, [addDatasetConfig, currentDatasetConfig, enqueueSnackbar, mutate, projectNo, updateDatasetConfig]);

	return <ProjectDatasetNavOptionContent onSave={onSave} />;
};

export default ProjectDatasetNavOptionContentContainer;
