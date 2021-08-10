import useSWR from 'swr';
import { AxiosError } from 'axios';
import { getProjectList } from '../API/project';
import { IGetProjectListParams, Projects } from '../API/project/types';

type Props =
	| {
			params?: IGetProjectListParams;
	  }
	| undefined;

const useProjectList = (props: Props = undefined) => {
	const result = useSWR<Projects, AxiosError>(
		() => ['getProjectsResult', props?.params],
		async (key, value) => {
			const data = await getProjectList(value);
			return data;
		}
	);

	return {
		loading: !result.data && !result.error,
		...result,
	};
};

export default useProjectList;
