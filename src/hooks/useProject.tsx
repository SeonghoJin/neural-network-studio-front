import { useCallback } from 'react';
import useSWR from 'swr';
import StandardModal from '../components/utils/modal/StandardModal';
import useProjectLocation from './useProjectLocation';
import { getProject } from '../API/project';

const useProject = () => {
	const { projectNo } = useProjectLocation();
	const result = useSWR(
		() => {
			return ['getProject', projectNo];
		},
		async (key, projectNumber) => {
			const response = await getProject(projectNumber);
			return response;
		}
	);

	return {
		...result,
		loading: !result.data && !result.error,
		errorModal: <StandardModal head="error" body={result.error} />,
	};
};

export default useProject;
