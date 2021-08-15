import useSWR from 'swr';
import { AxiosError } from 'axios';
import { getProjectList } from '../API/project';
import { IGetProjectListParams, Projects } from '../API/project/types';
import { sleep } from '../util';

type Props =
	| {
			params?: IGetProjectListParams;
	  }
	| undefined;

const useProjectList = (props: Props = undefined) => {
	const result = useSWR<Projects, AxiosError>(
		() => ['getProjectsResult', props?.params],
		async (key, value) => {
			const data = await sleep(300).then(async () => {
				const delayedData = await getProjectList(value);
				return delayedData;
			});
			return data;
		}
	);

	return {
		loading: !result.data,
		...result,
	};
};

export default useProjectList;
