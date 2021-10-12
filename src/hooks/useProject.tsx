import useSWR from 'swr';
import StandardModal from '../components/utils/modal/StandardModal';
import useProjectLocation from './useProjectLocation';
import { getProject } from '../API/project';
import { sleep } from '../util';
import { IProjectDto } from '../API/project/types';

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
			revalidateOnFocus: false,
		}
	);
	return {
		...result,
		project: result?.data as IProjectDto,
		loading: !result.data && !result.error,
		errorModal: <StandardModal head="error" body={result.error} />,
	};
};

export default useProject;
