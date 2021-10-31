import { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import ProjectDatasetNavOptionContent from './ProjectDatasetNavOptionContent';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import { useUpdateDatasetConfig } from '../apis';
import { DatasetConfig } from '../types';
import { useAddDatasetConfig } from '../../../../hooks/useAddDatasetConfig';
import SimpleBackdrop from '../../../utils/BackLoading';

type Props = {
	currentDatasetConfig: undefined | DatasetConfig;
	mutate: any;
	setCurrentDatasetConfig: any;
};

const ProjectDatasetNavOptionContentContainer = ({ currentDatasetConfig, mutate, setCurrentDatasetConfig }: Props) => {
	const updateDatasetConfig = useUpdateDatasetConfig();
	const addDatasetConfig = useAddDatasetConfig();
	const { enqueueSnackbar } = useSnackbar();
	const { projectNo } = useProjectLocation();
	const onSave = useCallback(async () => {
		if (currentDatasetConfig == null) {
			enqueueSnackbar('데이터셋 설정이 없습니다.', {
				variant: 'error',
			});
			return;
		}

		if (currentDatasetConfig.id === -1) {
			await addDatasetConfig
				.fetch(projectNo, currentDatasetConfig)
				.then(async (res) => {
					enqueueSnackbar('데이터셋 설정을 추가했습니다.', {
						variant: 'success',
					});
					await mutate();
					setCurrentDatasetConfig(undefined);
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
					mutate();
					enqueueSnackbar('저장되었습니다.', {
						variant: 'success',
					});
				})
				.catch((e) => {
					enqueueSnackbar(e.message, {
						variant: 'error',
					});
				});
		}
	}, [
		addDatasetConfig,
		currentDatasetConfig,
		enqueueSnackbar,
		mutate,
		projectNo,
		setCurrentDatasetConfig,
		updateDatasetConfig,
	]);

	return (
		<>
			{addDatasetConfig.loading || (updateDatasetConfig.loading && <SimpleBackdrop open />)}
			<ProjectDatasetNavOptionContent onSave={onSave} />
		</>
	);
};

export default ProjectDatasetNavOptionContentContainer;
