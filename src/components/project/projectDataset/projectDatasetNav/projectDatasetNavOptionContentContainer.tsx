import { useCallback, useEffect, useState } from 'react';
import { CircleLoading } from '../../../utils/Loading/CircularLoading';
import ProjectDatasetNavOptionContent from './ProjectDatasetNavOptionContent';
import useProjectLocation from '../../../../hooks/useProjectLocation';
import usePageNation from '../../../utils/pagenation/usePageNation';
import { useDatasetConfigList } from '../apis';
import { GetProjectDatasetConfigListParams } from '../types';

const ProjectDatasetNavOptionContentContainer = () => {
	const { projectNo } = useProjectLocation();
	const [datasetConfigListParams, setDatasetConfigListParams] = useState(new GetProjectDatasetConfigListParams());
	const { data, mutate } = useDatasetConfigList(projectNo, { params: datasetConfigListParams });
	const { item, page } = usePageNation({
		lastPage: data?.pagenation.lastPage,
	});
	const onSave = useCallback(() => {
		console.log('Add Update dataset config api fetcher');
	}, []);

	useEffect(() => {
		setDatasetConfigListParams(
			new GetProjectDatasetConfigListParams({
				curPage: page.toString(),
			})
		);
	}, [page]);

	return <>{<ProjectDatasetNavOptionContent onSave={onSave} /> || <CircleLoading />}</>;
};

export default ProjectDatasetNavOptionContentContainer;
