import { useCallback, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';
import ProjectDatasetNavOptionContent from './ProjectDatasetNavOptionContent';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import usePageNation from '../../../utils/pagenation/usePageNation';
import { useDatasetConfigList } from '../apis';
import { GetProjectDatasetConfigListParams } from '../types';
import useUpdateProjectConfig from '../../../../hooks/useUpdateProjectConfig';

type Props = {
	value: any;
	setValue: any;
};

const ProjectDatasetNavOptionContentContainer = ({ value, setValue }: Props) => {
	const { fetch } = useUpdateProjectConfig();
	const { projectNo } = useProjectLocation();
	const { enqueueSnackbar } = useSnackbar();
	const onSave = useCallback(() => {
		if (value == null) {
			enqueueSnackbar('데이터셋 설정이 없습니다.', {
				variant: 'error',
			});

			return;
		}
		fetch(projectNo, value)
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
		console.log('Add Update dataset config api fetcher');
	}, [value, fetch, projectNo, enqueueSnackbar]);

	return <>{<ProjectDatasetNavOptionContent onSave={onSave} /> || <CircleLoading />}</>;
};

export default ProjectDatasetNavOptionContentContainer;
