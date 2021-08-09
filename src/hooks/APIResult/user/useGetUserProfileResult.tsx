import useSWR from 'swr';
import { AxiosError, AxiosStatic } from 'axios';
import StandardModal from '../../../components/utils/modal/StandardModal';
import { getUserProfile } from '../../../API/User';

const useGetUserProfileResult = () => {
	const result = useSWR('GetUserProfile', async () => {
		try {
			const response = await getUserProfile();
			return response;
		} catch (e: AxiosError | any) {
			if (e && e.isAxiosError) {
				const status = (e as AxiosError).response?.status;
				console.log(e.response);
				if (status === 401) {
					return null;
				}
			}
			console.log(3);
			throw e;
		}
	});

	console.log(result);

	const { data, error } = result;
	return {
		data,
		error,
		errorModal: <StandardModal head="error" body={result.error} />,
	};
};

export default useGetUserProfileResult;
