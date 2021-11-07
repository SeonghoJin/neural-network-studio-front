import useSWR from 'swr';
import { getTrainLogsAPI } from '../API/Dataset';

type Props = {
	trainNo: string;
	projectNo: string;
};

export const useTrainLogs = ({ trainNo, projectNo }: Props) => {
	const result = useSWR(
		() => [`getTrainLogsResult`, trainNo, projectNo],
		async (key, _trainNo, _projectNo) => {
			const data = await getTrainLogsAPI(_projectNo, _trainNo);
			return data;
		}
	);

	return {
		...result,
		loading: !result.data && !result.error,
	};
};
