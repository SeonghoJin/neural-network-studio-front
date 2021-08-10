import { useCallback } from 'react';
import useSWR from 'swr';
import StandardModal from '../components/utils/modal/StandardModal';
import { PROJECT_ERROR_HANDLE_URI } from './APIResult/util';
import useProjectLocation from './useProjectLocation';
import { getProject } from '../API/project';

const useProjectResult = () => {
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

	const handleError = useCallback(() => {
		window.location.replace(PROJECT_ERROR_HANDLE_URI);
	}, []);

	return {
		...result,
		loading: !result.data && !result.error,
		errorModal: <StandardModal head="error" body={result.error} onClose={handleError} />,
	};
};

export default useProjectResult;
