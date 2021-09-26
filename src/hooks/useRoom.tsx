import useSWR from 'swr';
import { getProjectRoomNumber } from '../API/project';
import useProjectLocation from './useProjectLocation';
import { sleep } from '../util';

const useRoom = () => {
	const { projectNo } = useProjectLocation();
	const result = useSWR(
		() => {
			return 'useRoom';
		},
		async () => {
			const delayedData = sleep(700).then(async () => {
				const data: { key: string } = await getProjectRoomNumber(projectNo);
				return data.key;
			});
			return delayedData;
		}
	);

	return {
		...result,
		loading: !result.error && !result.data,
	};
};

export default useRoom;
