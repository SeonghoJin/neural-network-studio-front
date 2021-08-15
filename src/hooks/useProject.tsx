import { useCallback } from 'react';
import useSWR from 'swr';
import StandardModal from '../components/utils/modal/StandardModal';
import useProjectLocation from './useProjectLocation';
import { getProject } from '../API/project';
import { sleep } from '../util';

const useProject = () => {
	const { projectNo } = useProjectLocation();
	const result = useSWR(
		() => {
			return ['getProject', projectNo];
		},
		async (key, projectNumber) => {
			const delayedData = await sleep(500).then(async () => {
				const response = await getProject(projectNumber);
				return response;
			});
			return delayedData;
		},
		{
			errorRetryCount: 0,
		}
	);

	return {
		...result,
		loading: !result.data && !result.error,
		errorModal: <StandardModal head="error" body={result.error} />,
	};
};

export default useProject;
